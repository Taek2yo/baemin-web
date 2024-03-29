import { connectDB } from "@/util/database";

export default async function getSelectedAddresses(req, res) {
  const { email } = req.query;
  try {
    const db = (await connectDB).db("baemin");
    const result = await db
      .collection("accounts")
      .find({ email: email, "address.isSelected": true })
      .project({ _id: 0, address: 1 })
      .toArray();

    res.status(200).json(result);
  } catch (error) {
    console.error("주소 가져오기 에러:", error);
    res.status(500).json({ message: "주소 가져오기 에러" });
  }
}
