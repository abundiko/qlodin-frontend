import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Playfair } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { FirebaseWrapper } from "@/components/hoc";

export const metadata: Metadata = {
  title: "qlodin",
  description: "created by  qlodin's team",
};

// fonts initialization
const quicksandFont = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300"],
  variable: "--font-quicksand",
});
const playfairFont = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksandFont.variable} ${playfairFont.variable} font-quicksand`}
      >
        <FirebaseWrapper>
          <main>
            {children}
            <Toaster />
          </main>
        </FirebaseWrapper>
      </body>
    </html>
  );
}
