import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "qlodin",
  description: "created by  qlodin's team",
};

const quicksandFont = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "300"],
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksandFont.variable} font-quicksand`}>
        <main>
          {/* <ClientProvider> */}

          {children}
          <Toaster />
          {/* </ClientProvider> */}
        </main>
      </body>
    </html>
  );
}
