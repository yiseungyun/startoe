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
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    }
  },
  secret : process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)