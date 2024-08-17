'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ChoiceBox from '@/components/choicebox';

const MockPage = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const handleSelect = (id: string) => {
		setSelectedId(id);
	};
	return (
		<div className='flex justify-center items-center h-screen bg-white'>
			<div className='flex flex-col space-y-5 w-[70%] items-center'>
				<div className='flex flex-col justify-center items-center bg-stone-200 rounded-md p-5'>
					<p className='text-black text-lg font-semibold'>
						Mock exam 123
					</p>
				</div>
				<div className='w-full flex justify-start'>
					<div className='bg-stone-200 rounded-md p-3 justify-end'>
						<p className='text-black text-lg font-normal'>
							Time left...
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center bg-stone-200 rounded-md w-full p-5 space-y-5'>
					<div className='flex flex-col space-y-5 w-[90%] items-center'>
						<div className='w-full flex justify-start'>
							<p className='text-black text-md font-normal'>
								Question1
							</p>
						</div>
						<div className='flex flex-col border rounded-md w-full p-5 justify-start'>
							<p className='text-black text-lg font-semibold'>
								Question...
							</p>
						</div>
						<ChoiceBox
							id='choice1'
							label='choice'
							checked={selectedId === 'choice1'}
							onChange={() => handleSelect('choice1')}
						/>
						<ChoiceBox
							id='choice2'
							label='choice'
							checked={selectedId === 'choice2'}
							onChange={() => handleSelect('choice2')}
						/>
						<ChoiceBox
							id='choice3'
							label='choice'
							checked={selectedId === 'choice3'}
							onChange={() => handleSelect('choice3')}
						/>
						<ChoiceBox
							id='choice4'
							label='choice'
							checked={selectedId === 'choice4'}
							onChange={() => handleSelect('choice4')}
						/>
					</div>
				</div>
				<div className='w-full flex justify-end'>
					<Button variant={'secondary'} className='bg-black'>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MockPage;
