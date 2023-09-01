import { connectDB } from "@/util/database";

export default async function editHandler(req, res) {
  if (req.method !== 'PUT') {
    res.status(405).json({ message: 'Bad Request' });
    return;
  }

  try {
    const { quantity, userEmail, basePrice } = req.body;
    const db = (await connectDB).db("baemin");
    const usersCollection = db.collection('accounts');

    // 해당 유저 정보 찾기
    const user = await usersCollection.findOne({ email: userEmail });

    if (!user) {
      res.status(404).json({ message: '유저가 존재하지 않습니다.' });
      return;
    }

    // 아이템 업데이트
    const updatedCart = user.cart.map((item) => {
      if (item._id === req.query.item_id) {
        const updatedItem = {
          ...item,
          quantity,
          price: basePrice * quantity,
        };
        return updatedItem;
      }
      return item;
    });

    // 유저 정보 업데이트
    await usersCollection.updateOne(
      { email: userEmail },
      { $set: { cart: updatedCart } }
    );

    // 업데이트된 아이템 정보를 클라이언트로 전송
    const updatedItem = updatedCart.find((item) => item._id === req.query.item_id);
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error('정보 변경 오류:', error);
    res.status(500).json({ message: '서버 에러' });
  }
}