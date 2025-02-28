import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "@/src/components/ui/layout/NavigationWrapper";
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
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}
