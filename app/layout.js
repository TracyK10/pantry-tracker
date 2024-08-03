import { Urbanist } from "next/font/google";
import "./globals.css";
import BottomNav from "../app/components/BottomNav";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Pantry Tracker made by Tracy Karanja 🍥",
  description: "Coded by Tracy K",
  icon: "./favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
