import NextAuth from "next-auth/next";
import KaKaoProvider from "next-auth/providers/kakao"
import GoogleProvider from 'next-auth/providers/google'

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
  callbacks: { // 유저 정보 DB 만들고 수정하기
    session: async ({ session }) => {
      return session;
    },
    jwt: async ({ token }) => { 
      return token;
    },
  },
  secret : process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)