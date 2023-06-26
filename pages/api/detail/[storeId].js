import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function detailHandler(req, res) {
  const query = req.query;
  const id = query.storeId;
  try {
   
    const db = (await connectDB).db('baemin');
    const result = await db.collection('store').findOne({ _id: new ObjectId(id) });

    res.status(200).json(result);
  } catch (error) {
    console.error("API 요청 에러:", error);
    res.status(500).json({ error: "API 요청 에러" });
  }
}

