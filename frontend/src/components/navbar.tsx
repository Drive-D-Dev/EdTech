'use client';
import React from 'react';
import { LOGO_IMG } from '@/constant/global';
import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from './ui/button';
import useScrollThreshold from '@/hooks/use-scroll-threshold';
import { AvatarDropdown } from '@/components/avatar-dropdown';
import { NavbarMenu } from '@/components/navbar-menu';
import Image from 'next/image';

// TODO: check whether or not user is sign in.
const session = true;

const scrolledStyle: React.CSSProperties = {
	borderRadius: '9999px',
	top: '1rem',
	maxWidth: 'min(1024px, 96%)',
	marginLeft: 'auto',
	marginRight: 'auto',
	padding: '1rem 1%',
	boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
	borderWidth: '1px',
};

export const Navbar = () => {
	// handle cool on scroll animation
	// add scrolledStyle styling to <nav /> when user scroll pass a certain threshold
	const isScrolled = useScrollThreshold();

	return (
		<nav
			className='bg-background/20 backdrop-blur-md py-4 sticky w-full top-0 z-10 transition-all duration-300'
			style={isScrolled ? scrolledStyle : {}}
		>
			<span className='container flex justify-between items-center'>
				<Link href='/'>
					<Image src={LOGO_IMG.src} alt={LOGO_IMG.alt} height={64} width={64} />
				</Link>
				<div className='flex justify-center items-center gap-4'>
					<NavbarMenu />
					{session ? <ProfileWrapper /> : <SignInWrapper />}
				</div>
			</span>
		</nav>
	);
};

// show when user is not sign in
const SignInWrapper = () => {
	return (
		<>
			<Button>Sign In</Button>
			<ModeToggle />
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
