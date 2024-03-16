import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Bookmark } from "./Bookmark";

export default async function bookmark() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Bookmark user_id={session.user_id}/>
    </>
  );
}
