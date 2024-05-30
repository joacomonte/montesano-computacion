import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import SideMenu from "../components/SideMenu/SideMenu";
// import { menuData } from "../data/menuData";
import Image from "next/image";
import QuickSearch from "../components/QuickSearch/QuickSearch";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RML Importaciones",
  description: "Developed by Montech",
  //to avoid zoom on inputs
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1 };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="menuBarContainer">
          <div className="layoutContainer">
            {/* <SideMenu data={menuData} /> */}
            <SideMenu />
            <Link href={"/"} className="logoContainer">
              <Image
                src="/newRML_logo.png"
                alt="Logo"
                sizes="500px"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Link>
            <QuickSearch />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
