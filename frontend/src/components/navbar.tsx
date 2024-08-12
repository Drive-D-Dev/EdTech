"use client"
import React from "react";
import { LOGO_IMG, NAV_LINKS } from "@/constant/global";
import Link from 'next/link'
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";
import useScrollThreshold from "@/hooks/use-scroll-threshold";


// TODO: check whether or not user is sign in.
const session = false

const scrolledStyle: React.CSSProperties = {
  borderRadius: "9999px",
  top: "1rem",
  maxWidth: "min(1024px, 96%)",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "1rem 1.4rem",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  borderWidth: "1px",
}

const Navbar = () => {
  const isScrolled = useScrollThreshold()

  return (
    <nav
      className="bg-background/20 backdrop-blur-md py-4 sticky w-full top-0 z-10 transition-all duration-300"
      style={isScrolled ? scrolledStyle : {}}
    >
      <span className="container flex justify-between items-center">
        <Link href="/">
          <img src={LOGO_IMG.src} alt={LOGO_IMG.alt} height={64} width={64} />
        </Link>
        <div className="flex justify-center items-center gap-4">
          {
            NAV_LINKS.map((link) => (
              <Link href={link.href}>
                <Button variant="ghost">
                  {link.title}
                </Button>
              </Link>
            ))
          }
          {
            session ?
              <ProfileWrapper /> :
              <SignInWrapper />
          }
        </div>
      </span>
    </nav>
  );
};

const SignInWrapper = () => {
  return (
    <>
      <Button>Sign In</Button>
      <ModeToggle />
    </>
  )
}

const ProfileWrapper = () => {
  return (
    <>
      <Avatar>
      </Avatar>
    </>
  )
}

export default Navbar;
