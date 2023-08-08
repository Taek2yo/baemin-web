import { connectDB } from "@/util/database";

export default async function getCategoryHandler(req, res) {
  const { category } = req.query;
  try {
    const db = (await connectDB).db("baemin");
    if (category === "oneserving") {
      // category.name이 "oneserving"이면 baemin.store 컬렉션의 전체 데이터를 가져옴
      const result = await db.collection("store").find({}).toArray();
      res.status(200).json(result);
    } else {
      // 나머지 경우에는 category에 맞는 데이터만 가져옴
      const result = await db
        .collection("store")
        .find({ category: category })
        .toArray();
      res.status(200).json(result);
    }
  } catch (error) {
    console.error("데이터 가져오기 에러:", error);
    res.status(500).json({ error: "데이터 가져오기 에러s" });
  }
}
