import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import NotLogin from "./NotLogin";
import Profile from "./Profile";

export default async function profile() {
  const session = await getServerSession(authOptions)
  
  return (
    <>
      {
        session
        ? <Profile/>
        : <NotLogin/>
      }
    </>
  );
}
