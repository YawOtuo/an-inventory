import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "../../lib/utils/provider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import Navbar from "./components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={` flex flex-col justify-center items-center`}>
            <Navbar />
  
          <div className="flex flex-col justify-center items-center max-w-[1728px] w-full">
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
