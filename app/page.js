import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Login from "./Login";
import { Main } from "./Main";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      {
        session
        ? <Main/>
        : <Login session={session}/>
      }
    </>
  );
}
