"use client";

import Footer from "./Footer";
import Header from "./Header";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section className="py-[70px]">{children}</section>
      <Footer />
    </>
  );
}
