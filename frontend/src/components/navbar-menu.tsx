import React from 'react'
import { NAV_LINKS } from '@/constant/global'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import useIsMobile from '@/hooks/use-is-mobile';


export const NavbarMenu = () => {
    const isMobile = useIsMobile()

    if (isMobile) {
        return <MobileMenu />
    }

    return (
        <>
            {
                NAV_LINKS.map((link) => (
                    <Link href={link.href}>
                        <Button variant="ghost">
                            {link.title}
                        </Button>
                    </Link>
                ))
            }
        </>
    )
}

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <HiOutlineMenuAlt3 className='text-2xl' />
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                </SheetHeader>
                <div className="mt-10">
                    {
                        NAV_LINKS.map((link) => (
                            <Link href={link.href}>
                                <Button
                                    className='w-full'
                                    size="lg"
                                    variant="ghost">
                                    {link.title}
                                </Button>
                            </Link>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>

    )
}