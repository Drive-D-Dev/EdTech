"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "./ui/button";
import useScrollThreshold from "@/hooks/use-scroll-threshold";
import { AvatarDropdown } from "@/components/avatar-dropdown";
import { NavbarMenu } from "@/components/navbar-menu";
import { useSession } from "next-auth/react";

export const ProfileNav = () => {
  // handle cool on scroll animation
  // add scrolledStyle styling to <nav /> when user scroll pass a certain threshold
  const { data: session } = useSession();

  return (
    <nav className="flex justify-end items-end mb-4">
      <div className="flex justify-center items-center gap-4">
        <ModeToggle />
        {session ? <ProfileWrapper /> : <SignInWrapper />}
      </div>
    </nav>
  );
};

// show when user is not sign in
const SignInWrapper = () => {
  return (
    <>
      <Button variant={"outline"} asChild>
        <Link href={"/auth/register"}>สมัครสมาชิก</Link>
      </Button>
      <Button>
        {" "}
        <Link href={"/auth/login"}>เข้าสู่ระบบ</Link>
      </Button>
    </>
  );
};

// show when user is sign in
const ProfileWrapper = () => {
  return (
    <>
      <AvatarDropdown />
    </>
  );
};
