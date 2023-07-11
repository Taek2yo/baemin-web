import { connectDB } from "@/util/database";

export default async function SearchHandler(req, res) {
  try {
    if (req.method !== "GET") {
      res.status(400).json({ message: "잘못된 요청입니다." });
      return;
    }

    const searchTerm = req.query.searchTerm;
    const db = (await connectDB).db("baemin");

    const storeResult = await db
      .collection("store")
      .find({
        title: { $regex: new RegExp(`${searchTerm}`, "i") },
      })
      .toArray();

    const storeNames = storeResult.map((item) => item.title);
    const menuResult = await db
      .collection("menu")
      .find({ $or: [
        { menu_info: { $elemMatch: { desc: { $regex: new RegExp(`${searchTerm}`, "i") } } } },
        { store_name: { $in: storeNames } },
      ], })
      .toArray();
    res.status(200).json({ storeResult, menuResult });
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
}
