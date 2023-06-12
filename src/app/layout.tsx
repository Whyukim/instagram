import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Metadata } from "next";

import Header from "components/Headers/Header";
import ProviderAuth from "context/AuthContext";
import Providers from "context/ThemeContext";
import SWRProvider from "context/SWRConText";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Instagrams",
    template: "Instagrams | %s",
  },
  description: "Instagrams Photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="bg-primary flex flex-col min-h-screen transition duration-300 ">
        <ProviderAuth>
          <Providers>
            <Header />
            <main className="grow w-full max-w-[1220px] mx-auto py-10">
              <SWRProvider>{children}</SWRProvider>
            </main>
          </Providers>
        </ProviderAuth>
        <div id="portal" />
      </body>
    </html>
  );
}
