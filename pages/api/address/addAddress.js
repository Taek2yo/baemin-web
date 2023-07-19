import { connectDB } from "@/util/database";

export default async function addAddressHandler(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Bad Request" });
      return;
    }
    const db = (await connectDB).db("baemin");
    const result = await db.collection("accounts");
  } catch (error) {
    console.error("MongoDB 저장 실패:", error);
    res.status(500).json({ error: " MongoDB 저장 실패" });
    return;
  }
}
