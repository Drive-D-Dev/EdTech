"use client"
import React from 'react';
import { NAV_LINKS } from '@/constant/global';
import { PanelsLeftBottom, Star, Menu } from "lucide-react";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import useIsMobile from '@/hooks/use-is-mobile';

const customButtonStyle = "w-full flex justify-start items-center gap-2";

export const NavbarMenu = () => {
	const isMobile = useIsMobile();

	if (isMobile) {
		return <MobileMenu />;
	}

	return (
		<>
			{NAV_LINKS.map((link, index: number) => (
				<Link href={link.href} key={index}>
					<Button variant='ghost' className={customButtonStyle}>
						{link.icon}{link.title}</Button>
				</Link>
			))}

		</>
	);
};

const MobileMenu = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side='right'>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className='mt-10'>
					{NAV_LINKS.map((link, index: number) => (
						<Link href={link.href} key={index}>
							<Button className='w-full' size='lg' variant='ghost'>
								{link.title}
							</Button>
						</Link>
					))}
				</div>

			</SheetContent>
		</Sheet>
	);
};
