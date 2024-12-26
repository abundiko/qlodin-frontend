import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Playfair } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { FirebaseWrapper, QueryClientWrapper } from "@/components/hoc";
import { createMetadata } from "@/functions/metadata";

export const metadata: Metadata = createMetadata({
  title: "Qlodin : Fashion and Social media knit together",
  description: "qlodin provides fashion and social networking services.",
});

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
        <QueryClientWrapper>
          <FirebaseWrapper>
            <main>
              {children}
              <Toaster />
            </main>
          </FirebaseWrapper>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
