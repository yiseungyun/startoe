import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './lib/StyledComponentsRegistry'
import { MenuBar } from "./MenuBar";
import ReactQueryProviders from "./lib/reactqueryProvider";
import AuthSession from "./lib/sessionProvider";
import RecoilRootWrapper from "./lib/RecoilRootWrapper";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import 'normalize.css/normalize.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "스타토",
  description: "토익스피킹 공부를 스마트하게 시작하기",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
          <RecoilRootWrapper>
              <ReactQueryProviders>
                <AuthSession>
                <StyledComponentsRegistry>
                    {children}
                    {session ? <MenuBar/> : null}
                </StyledComponentsRegistry>
                </AuthSession>
              </ReactQueryProviders>
          </RecoilRootWrapper>
      </body>
    </html>
  );
}
