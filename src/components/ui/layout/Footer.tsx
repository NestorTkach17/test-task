"use client";

import Link from "next/link";
import { allTabLinks } from "@/src/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-white fixed bottom-0 w-full pt-[14px] pl-[30px] pr-[30px] pb-[30px] flex justify-around items-center border border-t-2 border-solid">
      {allTabLinks.map(({ to, linkText, icon }, index) => (
        <Link
          key={index}
          className="flex flex-col gap-[7px] items-center"
          href={to}
        >
          {icon}
          {linkText}
        </Link>
      ))}
    </footer>
  );
}
