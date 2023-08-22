import { connectDB } from "@/util/database";

export default async function getCartHandler(req, res) {
  const userEmail = req.query.user;
  try {
    const db = (await connectDB).db("baemin");
    const result = await db
      .collection("accounts")
      .findOne({ email: userEmail });
    res.status(200).json(result?.cart || []);
  } catch (error) {
    console.error("장바구니 가져오기 에러:", error);
    res.status(500).json({ message: "장바구니 가져오기 에러" });
  }
}
