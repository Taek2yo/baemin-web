import { connectDB } from "@/util/database";

export default async function deleteCartItemHandler(req, res) {
    console.log(req.body)
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Bad Request" });
      return;
    }
    
    const { userEmail, itemId } = req.body;
    console.log(userEmail)
    console.log(itemId)
    const db = (await connectDB).db("baemin");
    const user = await db.collection("accounts").findOne({ email: userEmail });

    if (!user) {
      res.status(404).json({ message: "유저가 존재하지 않습니다." });
      return;
    }

    // 장바구니에서 제거할 아이템 찾기
    const updatedCart = user.cart.filter(
      (item) => item._id.toString() !== itemId
    );

    // 유저 장바구니 정보 업데이트
    await db
      .collection("accounts")
      .updateOne({ email: userEmail }, { $set: { cart: updatedCart } });
    res.status(200).json({ message: "성공" });
  } catch (error) {
    console.error("장바구니 제거 실패:", error);
    res.status(500).json({ error: "장바구니 제거 오류" });
  }
}
