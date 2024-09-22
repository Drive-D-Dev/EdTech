'use client';
import CardSummary from '@/components/summary-card';
import AnswerCard from '@/components/answer-card';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GetExamResultAPI } from '@/api/getExamResult';
import { toast } from 'sonner';
import { ExamAnswerResultResponse } from '@/model/examAnswerResultResponse';

// Mock Data

const MockAnswerPage = () => {
	const params = useParams<{ setId: string }>();
	const setId = params?.setId;

	if (!setId) return <div>Exam Not Found</div>;

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<ExamAnswerResultResponse | null>(null);

	const fetchData = async () =>
		GetExamResultAPI(setId).then((res) => {
			if (res.success) {
				console.log(res.data);
				setData(res.data);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				toast.error('Failed to load, please try again');
			}
		});

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<CardSummary data={data} isLoading={isLoading} />
			<AnswerCard data={data} isLoading={isLoading} />
		</div>
	);
};

export default MockAnswerPage;
