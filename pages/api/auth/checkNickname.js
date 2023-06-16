import { connectDB } from "@/util/database";

export default async function checkNicknameHandler(req, res) {
  if (req.method === "POST") {
    try {
      const db = (await connectDB).db("baemin");
      const existingNickname = await db.collection("accounts").findOne({ name: req.body.name });

      if (existingNickname) {
        return res.status(200).json({ exists: true });
      } else {
        return res.status(200).json({ exists: false });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  return res.status(405).end();
}
