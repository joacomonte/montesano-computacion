import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "./components/SideMenu/SideMenu";
import { menuData } from "./data/menuData";
import Image from "next/image";
import QuickSearch from "./components/QuickSearch/QuickSearch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Montesano Computacion",
  description: "Developed by Montech",
  //to avoid zoom on inputs
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layoutContainer">
          <SideMenu data={menuData} />
          <div className="logoContainer">
          <Image src="/mcLogo.svg" alt="Logo"
            sizes="500px"
            fill
            style={{
              objectFit: "contain",
            }} />
          </div>
          <QuickSearch />
        </div>

        {children}
      </body>
    </html>
  );
}
