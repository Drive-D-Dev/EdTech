import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PanelsLeftBottom, Star } from "lucide-react";
import { LOGO_IMG } from "@/constant/global";
import Link from "next/link";
import Logo from "@/components/logo"

const SideNav = () => {

  const customButtonStyle = "w-full flex justify-start items-center gap-2";
  return (
    <div className="flex flex-col h-full gap-5 justify-start items-start py-6">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="w-full mt-5">
        <li>
          <Button variant="ghost" size="lg" className={customButtonStyle} asChild>
            <Link href={"/"}>
              <PanelsLeftBottom size={16} /> หน้าหลัก
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="lg" className={customButtonStyle} asChild>
            <Link href={"/upcomming"}>
              <Star size={16} />
              อีเว้น
            </Link>
          </Button>
        </li>
      </ul>
      <footer className="mt-auto flex flex-col items-start">
        <p className="text-sm text-muted-foreground">Copyright © 2024</p>
        <Button variant="link">เงื่อนไขของการบริการ</Button>
      </footer>
    </div>
  );
};

export default SideNav;
