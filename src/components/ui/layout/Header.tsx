"use client";

import { EstiIcon, LogoIcon, NotificationIcon, WorldIcon } from "../../svg";

export default function Header() {
  return (
    <header className="bg-white fixed top-0 w-full flex text-center pt-[20px] px-[20px] items-center justify-between">
      <div className="flex gap-[8px] items-center">
        <LogoIcon />
        <a className="font-bold text-[28px] text-black">Rattad24</a>
      </div>
      <div className="flex items-center gap-[17px]">
        <div className="flex items-center gap-[7px]">
          <EstiIcon />
          <p className="text-black">Esti</p>
        </div>
        <div className="flex gap-[16px] items-center">
          <WorldIcon />
          <NotificationIcon />
        </div>
      </div>
    </header>
  );
}
