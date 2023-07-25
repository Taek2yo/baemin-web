import { connectDB } from "@/util/database";

export default async function getAddressHandler(req, res) {
  const { email } = req.query;
  console.log(email)
  try {
    const db = (await connectDB).db("baemin");
    const result = await db
      .collection("accounts")
      .find({ email: email }) // 이메일과 일치하는 주소 정보만 가져오도록 쿼리 설정
      .project({ _id: 0, address: 1 })
      .toArray();

    res.status(200).json(result);
  } catch (error) {
    console.error("주소 가져오기 에러:", error);
    res.status(500).json({ message: "주소 가져오기 에러" });
  }
}