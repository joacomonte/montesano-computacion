import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import SideMenu from "../components/SideMenu/SideMenu";
import { menuData } from "../data/menuData";
import Image from "next/image";
import QuickSearch from "../components/QuickSearch/QuickSearch";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Montesano Computacion",
  description: "Developed by Montech",

};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1 };


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="menuBarContainer">

        <div className="layoutContainer">
        <SideMenu data={menuData} />
          <Link href={'/'} className="logoContainer">
          <Image src="/mcLogo.svg" alt="Logo"
            sizes="400px"
            fill
            style={{
              objectFit: "contain",
            }} />
          </Link>
          <QuickSearch />
        </div>
        </div>

        {children}
      </body>
    </html>
  );
}
