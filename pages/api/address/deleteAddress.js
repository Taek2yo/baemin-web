import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function deleteAddressHandler(req, res) {
  const addressId = JSON.parse(req.body).addressId;
  console.log(addressId);
  try {
    const db = (await connectDB).db("baemin").collection("accounts");

    const result = await db.updateOne(
      { "address.addressId": new ObjectId(addressId) },
      { $pull: { "address": { "addressId": new ObjectId(addressId) } } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "주소를 찾을 수 없습니다." });
    }

    return res.status(200).json({ message: "주소 삭제 성공." });
  } catch (error) {
    console.error("주소 삭제 중 오류 발생:", error);
    return res.status(500).json({ error: "주소 삭제 중 오류 발생" });
  }
}
