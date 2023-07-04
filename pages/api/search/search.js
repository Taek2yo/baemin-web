import { connectDB } from "@/util/database";

export default async function SearchHandler(req, res) {
  try {
    if (req.method !== "GET") {
      res.status(400).json({ message: "Bad Request" });
      return;
    }

    const searchTerm = req.query.searchTerm;
    const db = (await connectDB).db("baemin");
    const result = await db
      .collection("menu")
      .find({
        $or: [
          { menu_info: { $elemMatch: { desc: { $regex: new RegExp(`${searchTerm}`, "i") } } } },
          { store_name: { $regex: new RegExp(`${searchTerm}`, "i") } },
        ],
      })
      .toArray();

    res.status(200).json(result);

  } catch (error) {
    console.error("데이터 가져오기 에러:", error);
    res.status(500).json({ message: "서버 오류" });
  }
}
