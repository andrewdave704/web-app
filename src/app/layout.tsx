import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eyezy - Phone Monitoring App Design Reference",
  description: "Eyezy phone monitoring software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={dm_sans.className}>
        {children}
      </body>
    </html>
  );
}
