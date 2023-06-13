import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function signUphandler(req, res) {
  if (req.method === "POST") {
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      let db = (await connectDB).db('baemin');
      await db.collection('accounts').insertOne(req.body);
      res.status(200).json('성공');
  }
}; 