import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "../components/SideMenu/SideMenu";
import { menuData } from "../data/menuData";
import Image from "next/image";
import QuickSearch from "../components/QuickSearch/QuickSearch";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RML Importaciones",
  description: "Developed by Montech",
  //to avoid zoom on inputs
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="menuBarContainer">
          <div className="layoutContainer">
            <SideMenu data={menuData} />
            <Link href={"/"} className="logoContainer">
              <p>RML</p>
            </Link>
            <QuickSearch />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
