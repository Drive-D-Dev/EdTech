import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PanelsLeftBottom, Star } from "lucide-react";
import { LOGO_IMG } from "@/constant/global";
import Link from "next/link";

const SideNav = () => {
  const customButtonStyle = "w-full flex justify-start items-center gap-2";
  return (
    <div className="flex flex-col h-full gap-5 justify-start items-start p-3">
      <Link href="/">
        <img src={LOGO_IMG.src} alt={LOGO_IMG.alt} height={64} width={64} />
      </Link>
      <ul className="w-full mt-5">
        <li>
          <Button variant="ghost" className={customButtonStyle}>
            <PanelsLeftBottom size={16} /> หน้าหลัก
          </Button>
        </li>
        <li>
          <Button variant="ghost" className={customButtonStyle}>
            <Star size={16} />
            อีเว้น
          </Button>
        </li>
      </ul>
      <footer className="mt-auto flex flex-col items-center">
        <p>Copyright © 2024</p>
        <Button variant="link">เงื่อนไขของการบริการ</Button>
      </footer>
    </div>
  );
};

export default SideNav;
