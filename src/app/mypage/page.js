import MyPage from "@/components/mypage/myPage";
import { authOptions } from "/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
export default async function myPage() {
  let session = await getServerSession(authOptions);
  return <MyPage session={session} />;
}
