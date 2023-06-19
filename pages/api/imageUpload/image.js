import aws from 'aws-sdk';
import { MongoClient } from 'mongodb';
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: 'ap-northeast-2',
    signatureVersion: 'v4',
  });

  const s3 = new aws.S3();
  const url = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME,
    Fields: { key: req.query.file },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 1048576], // 파일용량 1MB 까지 제한
    ],
  });

  // MongoDB 저장
  const userId = session?.user?.name;
  const value = url.fields.key;
  
  try {
    const mongoUrl = process.env.MONGO_URL;
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db('baemin');
    const collection = db.collection('accounts');
    
    await collection.updateOne(
      { name: userId },
      { $set: { profileImage: value} }
    );

    client.close();
  } catch (error) {
    console.error('MongoDB 저장 실패:', error);
    res.status(500).json({ error: ' MongoDB 저장 실패' });
    return;
  }

  res.status(200).json(url);
}
