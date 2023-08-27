import { connectDB } from "@/util/database";

export default async function validaitionHandler(req, res) {
    try {
      if (req.method !== 'POST') {
        res.status(400).json({ message: 'Bad Request' });
        return;
      }
  
      const { userEmail, cartItem } = req.body;
      const db = (await connectDB).db("baemin");
      const user = await db.collection('accounts').findOne({ email: userEmail });
  
      if (!user) {
        res.status(404).json({ message: '유저가 존재하지 않습니다.' });
        return;
      }

      // user.cart가 비어있을 경우에도 true로 설정
      const isStoreIdMatching = user.cart.length === 0 || user.cart[0].store_id === cartItem.store_id;
      res.status(200).json({ isStoreIdMatching });
     
    } catch (error) {
      console.error("store_id 비교 실패:", error);
      res.status(500).json({ error: "store_id 비교 오류" });
    }
}
