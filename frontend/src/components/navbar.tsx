import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="container bg-background/40 backdrop-blur-sm py-4 sticky w-full top-0 left-0 z-10">
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
