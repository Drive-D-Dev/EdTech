import React, { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GetExamResultAPI } from '@/api/getExamResult';

// Constants
const timeUsed = '100';
const totalTime = '300';
const correctAnswers = 20;
const wrongAnswers = 30;
const correctPercentage = 100 * (correctAnswers / (correctAnswers + wrongAnswers));

const TimerSummary = ({ fullTime, elapsedTime }: { fullTime: number; elapsedTime: number }) => {
	const percentage = (elapsedTime / fullTime) * 100;
	const circleStyle = {
		background: `conic-gradient(
      #4caf50 ${percentage}%, 
      #e0e0e0 ${percentage}% 100%
    )`,
	};

	return (
		<div className='flex items-center justify-center'>
			<div className='relative w-32 h-32'>
				{/* Outer circle with progress */}
				<div className='w-full h-full rounded-full' style={circleStyle} />
				{/* Inner white circle */}
				<div className='absolute inset-3 bg-white rounded-full flex items-center justify-center'>
					{/* Center text */}
					<div className='text-center'>
						<div className='text-xl font-bold'>{elapsedTime}</div> {/* Time used */}
						<div className='text-sm'>นาที</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const CardSummary: FC<{ setId: string }> = ({ setId }) => {
	const { data, error, isLoading, mutate } = GetExamResultAPI(parseInt(setId));
	if (isLoading || !data) return <div>Loading</div>;

	return (
		<Card className='w-fit'>
			<CardHeader>
				<CardTitle className='text-lg'>สรุป</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='flex flex-row space-x-4'>
					<div>
						<TimerSummary
							fullTime={Number(totalTime)}
							elapsedTime={Number(data.data.time)}
						/>
						{/* Converted timeUsed and totalTime to numbers */}
					</div>
					<div className='flex flex-col space-y-2'>
						<div className='bg-gray-200 px-4 py-2 rounded-sm'>
							ถูกต้อง {data.data.stat.percentage}%
						</div>
						<div className='flex flex-row space-x-2'>
							<div className='bg-green-200 px-4 py-2 rounded-sm'>
								ถูก {data.data.stat.correct} ข้อ
							</div>
							<div className='bg-red-200 px-4 py-2 rounded-sm'>
								ผิด {data.data.stat.wrong} ข้อ
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default CardSummary;
