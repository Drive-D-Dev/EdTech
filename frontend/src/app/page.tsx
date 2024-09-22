import StudySetWrapper from '@/components/studyset-wrapper';
import Image from 'next/image';

export default function Component() {
	return (
		<div className=''>
			<Image
				src='/banner.webp'
				width={1200}
				height={300}
				alt='Image'
				className='rounded-md object-cover h-80'
			/>
			<h2 className='text-2xl font-bold mb-4 mt-8'>กวดโจทย์ข้อสอบ ภาค ก.</h2>
			<StudySetWrapper />
		</div>
	);
}
