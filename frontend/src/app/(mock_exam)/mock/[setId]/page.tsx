'use client';
import React, { FC, useRef, useState } from 'react';
import ChoiceButton from '@/components/choicebutton';
import CountdownTimer from '@/components/timer-countdown';
import TwoRowLayout from '@/components/twolayout';
import { Button } from '@/components/ui/button';
import { useRouter, useParams } from 'next/navigation';
import { GetQuestionAPI } from '@/api/question';
import { SendUserTest } from '@/api/sendUserTest';
import { AnswerPayload } from '@/model/answerPayload';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import useIsMobile from '@/hooks/use-is-mobile';
import { Grid2X2 } from 'lucide-react';
import { BaseResponse } from '@/model/baseResponse';
import { QuestionResponse } from '@/model/questionResponse';

export default function ExamplePage() {
	const [selectedChoices, setSelectedChoices] = useState<{
		[questionId: string]: number | null;
	}>({});
	const isMobile = useIsMobile();
	const [open, setOpen] = React.useState(false);
	const [showWarning, setShowWarning] = React.useState(false);
	const timerRef = useRef<any>(null);
	const router = useRouter();
	const params = useParams<{ setId: string }>();

	const setId = params?.setId;
	const [answerPayload] = React.useState<AnswerPayload>({
		setId: parseInt(setId ?? '0'),
		time: 0,
		Question: [],
	});
	if (!setId) return <div>Exam Not Found</div>;

	const { data, isLoading } = GetQuestionAPI(parseInt(setId));

	if (isLoading || !data || !Array.isArray(data.data)) return <div>Loading</div>;

	const handleSelect = (questionId: number, choiceId: number) => {
		setSelectedChoices((prev) => ({
			...prev,
			[questionId]: choiceId,
		}));
		const questionIndex = answerPayload.Question.findIndex((q) => q.question_id === questionId);

		if (questionIndex > -1) {
			answerPayload.Question[questionIndex].choice_id = choiceId;
		} else {
			answerPayload.Question.push({
				question_id: questionId,
				choice_id: choiceId,
			});
		}
	};

	const selectedCount = Object.keys(selectedChoices).filter((key) => selectedChoices[key]).length;

	const totalQuestions = data?.data?.length;

	const handleFinishExam = () => {
		const unansweredQuestions = data.data.some((exam) => !selectedChoices[exam.id]);
		if (unansweredQuestions) {
			setShowWarning(true);
			setOpen(false);
		} else {
			setOpen(true);
			setShowWarning(false);
		}
	};

	const navigateToResults = async () => {
		answerPayload.time = timerRef.current.getTimeLeft();
		const response = await SendUserTest(answerPayload);
		setOpen(false);
		if (response.success) {
			router.push(`/mockanswer/${response.data.answerStudySetId}`);
		}
	};

	const DoneDialog = () => {
		return (
			<>
				<Dialog open={open}>
					<DialogTrigger asChild>
						<span>
							<Button
								className='flex ml-auto  mt-4'
								size='lg'
								onClick={handleFinishExam}
							>
								<p>Finish</p>
							</Button>
						</span>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Finish</DialogTitle>
						</DialogHeader>
						<DialogDescription>
							Are you sure you want to finish the exam?
						</DialogDescription>
						<DialogFooter>
							<Button variant='outline' onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button onClick={navigateToResults}>Yes</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>

				<Dialog open={showWarning} onOpenChange={setShowWarning}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Warning</DialogTitle>
						</DialogHeader>
						<DialogDescription>You have unanswered questions.</DialogDescription>
						<DialogFooter>
							<Button variant='outline' onClick={() => setShowWarning(false)}>
								OK
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>

				<Dialog>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Submit Failed</DialogTitle>
						</DialogHeader>
						<DialogDescription>Please try again.</DialogDescription>
						<DialogFooter>
							<Button variant='outline'>Retry</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</>
		);
	};

	return (
		<div>
			<div className='flex justify-between sm:pl-4'>
				<CountdownTimer ref={timerRef} duration={300} className='sticky flex-1' />
				{isMobile && (
					<QuestionOverviewBox
						data={data}
						selectedCount={selectedCount}
						totalQuestions={totalQuestions}
						selectedChoices={selectedChoices}
					/>
				)}
			</div>
			<TwoRowLayout
				leftContent={
					!isMobile && (
						<QuestionOverviewBox
							data={data}
							selectedCount={selectedCount}
							totalQuestions={totalQuestions}
							selectedChoices={selectedChoices}
						/>
					)
				}
				rightContent={
					<div className='space-y-4'>
						{data.data.map((question, index) => (
							<div
								key={question.id}
								id={`question${index + 1}`}
								className=' box flex flex-col justify-center items-center w-full gap-4 bg-background relative !pt-7 md:pt-auto'
							>
								<div className='w-full justify-start'>
									<p className='text-background text-lg font-normal'>
										<div className='flex items-start'>
											<div
												key={question.id}
												className='flex items-center justify-center w-8 h-8 text-center rounded cursor-pointer absolute top-0 left-0 md:static rounded-br-2xl md:rounded-br-sm'
												style={{ backgroundColor: '#DB7801' }}
											>
												<p className='text-background'>{index + 1}</p>
											</div>
											<p className='text-foreground ml-4'>
												{question.content}
											</p>
										</div>
									</p>
								</div>
								<div className='w-full justify-center'>
									{question.Choice.map((choice) => (
										<ChoiceButton
											key={choice.id}
											id={choice.id}
											label={choice.content}
											isSelected={selectedChoices[question.id] === choice.id}
											onSelect={(id) => handleSelect(question.id, id)}
										/>
									))}
								</div>
							</div>
						))}
						<DoneDialog />
					</div>
				}
			/>
		</div>
	);
}

const QuestionOverviewBox: FC<{
	data: BaseResponse<QuestionResponse[]>;
	selectedCount: number;
	totalQuestions: number;
	selectedChoices: { [questionId: string]: number | null };
}> = ({ data, selectedCount, totalQuestions, selectedChoices }) => {
	const isMobile = useIsMobile();

	if (isMobile) {
		return (
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant='outline' size='icon'>
						<Grid2X2 />
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>
							{' '}
							<div className='mb-4 text-xl text-center'>
								<p className='text-foreground'>
									ทำแล้ว {selectedCount} / {totalQuestions} ข้อ
								</p>
							</div>
						</DrawerTitle>
					</DrawerHeader>
					<DrawerFooter>
						<div className='flex flex-row flex-wrap gap-3 mx-auto px-8 pb-5'>
							{data.data.map((question, index) => (
								<DrawerClose asChild key={index}>
									<a
										href={`#question${index + 1}`}
										className={`flex items-center justify-center w-14 h-14 text-center rounded cursor-pointer ${
											selectedChoices[question.id]
												? 'bg-blue-300'
												: 'bg-gray-300'
										}`}
									>
										<p className='text-black'>{index + 1}</p>
									</a>
								</DrawerClose>
							))}
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='mb-4 text-xl'>
				<p className='text-foreground'>
					{selectedCount} / {totalQuestions} ข้อ
				</p>
			</div>
			<div className='flex flex-row flex-wrap gap-3 justify-center'>
				{data.data.map((question, index) => (
					<a
						key={question.id}
						href={`#question${index + 1}`}
						className={`flex items-center justify-center w-10 h-10 text-center rounded cursor-pointer ${
							selectedChoices[question.id] ? 'bg-blue-300' : 'bg-gray-300'
						}`}
					>
						<p className='text-black'>{index + 1}</p>
					</a>
				))}
			</div>
		</div>
	);
};
