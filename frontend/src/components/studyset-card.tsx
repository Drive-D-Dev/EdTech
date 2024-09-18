import React, { FC } from 'react';
import { Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter } from 'next/navigation';

interface StudySetCardProps {
	id?: number;
	title?: string;
}

interface StudySetCardWithSkeleton extends FC<StudySetCardProps> {
	Skeleton: FC;
}

const StudySetCard: StudySetCardWithSkeleton = ({ id, title }) => {
	const router = useRouter();

	function gotoPractice() {
		router.push('/practice');
	}

	function gotoExam() {
		router.push('/mock');
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle className='text-lg'>{title} </CardTitle>
				<div className='flex items-center'>
					<span className='text-sm text-gray-500'>คำถาม 72 ข้อ</span>
					<div className='flex ml-auto'>
						<Star className='h-4 w-4 text-yellow-400 ml-2' />
						<Star className='h-4 w-4 text-yellow-400 ml-2' />
						<Star className='h-4 w-4 text-yellow-400 ml-2' />
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className='flex items-center justify-between mb-2'>
					<span className='flex items-center'>
						<div className='w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2'>
							ก
						</div>
						<span>ภูมิศาสตร์</span>
					</span>
					<span>20 ข้อ</span>
				</div>
				<div className='flex items-center justify-between mb-2'>
					<span className='flex items-center'>
						<div className='w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs mr-2'>
							ข
						</div>
						<span>อังกฤษ</span>
					</span>
					<span>32 ข้อ</span>
				</div>
				<div className='flex items-center justify-between'>
					<span className='flex items-center'>
						<div className='w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs mr-2'>
							ค
						</div>
						<span>ตรรกศาสตร์</span>
					</span>
					<span>32 ข้อ</span>
				</div>
			</CardContent>
			<CardFooter className='flex flex-col gap-1'>
				<Button className='w-full' onClick={gotoExam}>
					จำลองสนามสอบ
				</Button>
				<Button className='w-full' variant='outline' onClick={gotoPractice}>
					ฝึกทำข้อสอบ
				</Button>
			</CardFooter>
		</Card>
	);
};

StudySetCard.Skeleton = MySkeleton;

function MySkeleton() {
	return (
		<Card className='w-[300px]'>
			<CardHeader>
				<Skeleton className='h-6 w-3/4' />
				<div className='flex items-center mt-2'>
					<Skeleton className='h-4 w-24' />
					<Skeleton className='h-4 w-4 ml-2 rounded-full' />
				</div>
			</CardHeader>
			<CardContent>
				{[0, 1, 2].map((index) => (
					<div key={index} className='flex items-center justify-between mb-2'>
						<span className='flex items-center'>
							<Skeleton className='h-6 w-6 rounded-full mr-2' />
							<Skeleton className='h-4 w-20' />
						</span>
						<Skeleton className='h-4 w-10' />
					</div>
				))}
			</CardContent>
			<CardFooter className='flex flex-col gap-2'>
				<Skeleton className='h-9 w-full' />
				<Skeleton className='h-9 w-full' />
			</CardFooter>
		</Card>
	);
}

export default StudySetCard;
