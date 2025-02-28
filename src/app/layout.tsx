import type { Metadata } from "next";
import "./globals.css";
import { graphik } from "@/src/styles/font";

export const metadata: Metadata = {
  title: "Rattad24",
  description: "Test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${graphik.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
