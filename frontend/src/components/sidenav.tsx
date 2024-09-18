import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LOGO_IMG } from "@/constant/global";

import Link from "next/link";
import Logo from "@/components/logo"
import useIsMobile from '@/hooks/use-is-mobile';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavbarMenu } from '@/components/navbar-menu'

const SideNav = () => {
  return (
    <div className="flex sm:flex-col flex-row h-full gap-5 sm:justify-start   justify-between items-center sm:items-start sm:py-6 py-2">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="sm:w-full sm:mt-5">
        <NavbarMenu />
      </ul>
      <footer className="mt-auto flex-col items-start sm:block hidden">
        <p className="text-sm text-muted-foreground">Copyright © 2024</p>
        <Button variant="link">เงื่อนไขของการบริการ</Button>
      </footer>
    </div>
  );
};


export default SideNav;
