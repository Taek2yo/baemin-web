import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function selectAddressHandler(req, res) {
  const addressId = req.body;
  if (req.method !== "POST") {
    res.status(400).json({ message: "Method Not Allowed" });
    return;
  }
  try {
    const db = (await connectDB).db("baemin");
    await db.collection("accounts").updateOne(
      { "address.isSelected": true },
      { $set: { "address.$[elem].isSelected": false } },
      { arrayFilters: [{ "elem.isSelected": true }] }
    );

    await db.collection("accounts").updateOne(
      { "address.addressId": new ObjectId(JSON.parse(addressId)) },
      { $set: { "address.$.isSelected": true } }
    );

    res.status(200).json({ message: "주소 설정 완료" });
  } catch (error) {
    console.error("주소 설정 실패:", error);
    res.status(500).json({ message: "주소 설정 실패" });
  }
}
