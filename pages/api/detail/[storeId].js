import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function detailHandler(req, res) {
  const query = req.query;
  const id = query.storeId;
  try {
    const db = (await connectDB).db('baemin');
    
    // 상점 정보 조회
    const storeResult = await db.collection('store').findOne({ _id: new ObjectId(id) });
    
    // 메뉴 정보 조회
    const menuResult = await db.collection('menu').findOne({ _id: new ObjectId(storeResult.menuId)});

    // 상점과 메뉴 정보를 합치기
    const result = {
      store: storeResult,
      menu: menuResult
    };

    res.status(200).json(result);
  } catch (error) {
    console.error("API 요청 에러:", error);
    res.status(500).json({ error: "API 요청 에러" });
  }
}
