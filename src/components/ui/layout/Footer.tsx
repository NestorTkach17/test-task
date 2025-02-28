"use client";
import React, { JSX } from "react";
import { EsindusedIcon, HeartIcon, HumanIcon, LoopIcon } from "../../svg";
import Link from "next/link";

interface ITabLink {
  to: string;
  linkText: string;
  icon: JSX.Element;
}

export default function Footer(): JSX.Element {
  const allTabLinks: ITabLink[] = [
    { to: "", linkText: "Otsing", icon: <LoopIcon /> },
    { to: "", linkText: "Lemmikud", icon: <HeartIcon /> },
    { to: "", linkText: "Esindused", icon: <EsindusedIcon /> },
    { to: "", linkText: "Profiil", icon: <HumanIcon /> },
  ];
  return (
    <footer className="bg-white fixed bottom-0 w-full pt-[14px] pl-[30px] pr-[30px] pb-[30px] flex justify-around items-center border-0 border border-t-2 border-solid">
      {allTabLinks.map(({ to, linkText, icon }, index) => (
        <Link
          key={index}
          className="flex flex-col gap-[7px] items-center"
          href="/profile"
        >
          {icon}
          {linkText}
        </Link>
      ))}
    </footer>
  );
}
