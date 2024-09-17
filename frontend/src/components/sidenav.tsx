import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PanelsLeftBottom, Star } from "lucide-react";

const SideNav = () => {
  const customButtonStyle = "w-full flex justify-start items-center gap-2";
  return (
    <div className="flex flex-col h-full gap-5 justify-start items-start">
      <Image src="/next.svg" width={100} height={100} alt="Next.js Logo" />
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
