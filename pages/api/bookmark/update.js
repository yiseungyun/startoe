import { connectDB } from "@/app/util/database"

export default async function handler(request, response) {
  const data = request.body.bookmark;
  let user = request.body.user_id;
  const user_id = String(user).replaceAll('"', "");
  if (request.method === 'POST') {
    try {
      let client = await connectDB;
      const db = client.db('startoe');
      await db.collection('bookmark').updateOne({ user_id: user_id }, { $set: data })
      return response.status(200).json('성공');
    } catch (error) {
      return response.status(500).json({ message: '실패', error: error.message });
    }
  }
}