import { connectDB } from "@/util/database";

export default async function addtoCartHandler(req, res) {
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

    // 장바구니에 아이템이 있는 경우 해당 store_id와 비교
    if (user.cart.length > 0 && user.cart[0].store_id !== cartItem.store_id) {
      // 기존 장바구니 정보 삭제하고 새로운 아이템 추가
      user.cart = [cartItem];
    } else {
      user.cart.push(cartItem);
    }

    // 유저 장바구니 정보 업데이트
    await db.collection('accounts').updateOne({ email: userEmail }, { $set: { cart: user.cart } });
    res.status(200).json({ message: '성공' });
  } catch (error) {
    console.error("장바구니 저장 실패:", error);
    res.status(500).json({ error: "장바구니 저장 오류" });
  }
}