'use client';

import AnswerBox from '@/components/answerbox';

const MockPage = () => {
	return (
		<div className='flex justify-center items-center h-screen bg-white'>
			<div className='flex flex-col space-y-5 w-[70%] items-center'>
				<div className='flex flex-col justify-center items-center bg-stone-200 rounded-md p-5'>
					<p className='text-black text-lg font-semibold'>45/50</p>
				</div>
				<div className='w-full flex justify-start'>
					<p className='text-black text-md font-normal'>Review</p>
				</div>
				<div className='flex flex-col justify-center items-center bg-stone-200 rounded-md w-full p-5 space-y-5'>
					<div className='flex flex-col space-y-5 w-[90%] items-center'>
						<div className='flex justify-between items-center w-full h-fit'>
							<p className='text-black'>Question1</p>
							<p className='text-black'>correct</p>
						</div>
						<div className='flex flex-col border rounded-md w-full p-5 justify-start'>
							<p className='text-black text-lg font-semibold'>
								Question...
							</p>
						</div>
						<AnswerBox boxColor='bg-red-500' label='choice' />
						<AnswerBox boxColor='bg-green-500' label='choice' />
						<AnswerBox boxColor='bg-red-500' label='choice' />
						<AnswerBox boxColor='bg-red-500' label='choice' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MockPage;
