import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Login from "./Login";
import { Main } from "./Main";
import { connectDB } from "./util/database";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let client = await connectDB;
  const db = client.db('startoe');
  let user_info;
  if (session) {
    user_info = await db.collection('bookmark').find({ user_id: session.user_id }).toArray();
    const object = {}
    for (const [key, value] of Object.entries(user_info[0])) {
      if (key === '_id') {
        object[key] = value.toString();
      } else {
        object[key] = value;
      }
    }
    user_info = object;
  }

  return (
    <>
      {
        session
        ? <Main user_info={user_info}/>
        : <Login/>
      }
    </>
  );
}
