import Profile from "@/components/profilepage/Profile"
import { authOptions } from "/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
export default async function ProfilePage(){
    let session = await getServerSession(authOptions);
    return(
        <Profile session={session}/>
    )
}