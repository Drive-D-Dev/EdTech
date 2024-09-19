import { PanelsLeftBottom, Star, Menu } from 'lucide-react';

export const LOGO_IMG = {
	src: '/testmate-logo.svg',
	alt: 'logo',
};

interface Link {
	title: string;
	href: string;
	icon: () => {};
}
export const NAV_LINKS = [
	{
		title: 'หน้าหลัก',
		href: '/',
		icon: <PanelsLeftBottom size={16} />,
	},
	{
		title: 'อีเว้น',
		href: '/event',
		icon: <Star size={16} />,
	},
];

export const BACKEND_URL = process.env.NEXT_PUBLIC_AXIOSBASEURL || 'http://localhost:8000';
