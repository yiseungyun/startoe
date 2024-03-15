import { connectDB } from "../util/database";
import { Bookmark } from "./Bookmark";

export default async function bookmark() {
  let client = await connectDB;
  const db = client.db('startoe');

  return (
    <>
      <Bookmark/>
    </>
  );
}
