import { connectDB } from "@/util/database";

export default async function searchTest(req, res) {
  const searchTerm = req.query.searchTerm;
  const db = (await connectDB).db("baemin");
  
  try {
    if (req.method !== "GET") {
      res.status(400).json({ message: "잘못된 요청입니다." });
      return;
    }
    
    const result = await db.collection("menu").aggregate([
      {
        $lookup: {
          from: "store",
          let: { menuIdString: { $toString: "$_id" } },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$menuIdString", "$menuId"]
                }
              }
            }
          ],
          as: "store_info",
        },
      },
      {
        $match: {
          $or: [
            {
              "menu_info.name": { $regex: new RegExp(`${searchTerm}`, "i") },
            },
            { store_name: { $regex: new RegExp(`${searchTerm}`, "i") } },
          ],
        },
      },
    ]).toArray();
    
    res.status(200).json(result);
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
}
