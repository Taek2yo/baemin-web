import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function addAddressHandler(req, res) {
  const { user, Addr, addrDetail, isSelected } = JSON.parse(req.body);
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Bad Request" });
      return;
    }
    const db = (await connectDB).db("baemin");
    await db.collection("accounts").updateOne(
      { email: user },
      {
        $push: {
          address: {
            Addr,
            addrDetail,
            addressId: new ObjectId(),
            isSelected,
          },
        },
      }
    );
    res.status(200).json({ message: "주소가 성공적으로 추가되었습니다." });
    
  } catch (error) {
    console.error("MongoDB 저장 실패:", error);
    res.status(500).json({ error: " MongoDB 저장 실패" });
    return;
  }
}
