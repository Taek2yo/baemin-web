import aws from 'aws-sdk';
import { MongoClient } from 'mongodb';
import { getSession } from 'next-auth/react';

export default async function deleteHandler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: '사용자가 없습니다.' });
    return;
  }

  const userId = session?.user?.name;
  const userProfileImage = session?.user?.profileImage;

  if (!userProfileImage) {
    res.status(400).json({ message: '프로필 이미지를 찾을 수 없습니다.' });
    return;
  }

  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: 'ap-northeast-2',
    signatureVersion: 'v4',
  });

  const s3 = new aws.S3();
  try {
    // S3에서 이미지 삭제
    await s3
      .deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: userProfileImage,
      })
      .promise();

    // MongoDB에서 이미지 정보 업데이트
    const mongoUrl = process.env.MONGO_URL;
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db('baemin');
    const collection = db.collection('accounts');

    await collection.updateOne(
      { name: userId },
      { $unset: { profileImage: '' } }
    );

    client.close();

    res.status(200).json({ message: '이미지 삭제 성공' });
  } catch (error) {
    console.error('이미지 삭제 실패:', error);
    res.status(500).json({ error: '이미지 삭제 실패' });
  }
}
