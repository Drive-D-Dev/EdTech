import React from "react";
import { LOGO_IMG, NAV_LINKS } from "@/constant/global";
import Link from 'next/link'
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";


// TODO: check whether or not user is sign in.
const session = false

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center bg-background/20 backdrop-blur-md py-4 sticky w-full top-2 left-2 z-10 rounded-full shadow-sm border">
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
