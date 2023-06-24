import { connectDB } from "@/util/database";

export default async function storeDataHandler(req, res) {
  try {
    if (req.method !== 'GET') {
      res.status(400).json({ message: 'Bad Request' });
      return;
    }

    const db = (await connectDB).db("baemin");
    const result = await db.collection('store').find().toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error('데이터 가져오기 에러:', error);
    res.status(500).json({ message: '서버 오류' });
  }
}
