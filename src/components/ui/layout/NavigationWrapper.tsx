"use client";
import { JSX } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      <section className="py-[70px]">{children}</section>
      <Footer />
    </>
  );
}
