import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Login from "./Login";
import { Main } from "./Main";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // DB랑 연결 후 데이터 받아와서 이걸 컴포넌트에 전달 -> 그리고! 컴포넌트에서 전역 상태에 저장해두기 ~,,,
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
