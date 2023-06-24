import { connectDB } from "@/util/database";

export default async function storeDataHandler(req,res){
    const db = (await connectDB).db("baemin");
    let result = await db.collection('store').find().toArray()
    res.status(200).json(result)
}