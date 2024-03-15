import NextAuth from "next-auth/next";
import KaKaoProvider from "next-auth/providers/kakao"
import GoogleProvider from 'next-auth/providers/google'
import { connectDB } from "@/app/util/database";

export const authOptions = {
  providers: [
    KaKaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET, 
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks: { 
    async jwt({ token, account, user }) {
      if (account && user) {
        token.provider = account.provider;
        token.user_email = user.email;
      } 
      return token;
    },
    async session({ session, token }) {
      session.user_id = token.provider + "/@#" + token.user_email;
      return session;
    },
    async signIn({ user, account }) {
      try {
        let client = await connectDB;
        const db = client.db('startoe');
        let result = await db.collection('user').find({ provider: account.provider, user_id: user.email }).toArray();
        if (result.length === 0) {
          const user_info = {
            provider: account.provider,
            user_id: user.email,
            user_name: user.name
          }
          const bookmark_list = {
            user_id: account.provider + "/@#" + user.email,
            all: [],
            template: [],
            part2: [],
            part3: [],
            part4: [],
            part5: []
          }
          await db.collection('user').insertOne(user_info);
          await db.collection('bookmark').insertOne(bookmark_list);
        } 
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  secret : process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)