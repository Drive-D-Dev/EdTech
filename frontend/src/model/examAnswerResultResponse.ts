type ExamAnswerResultResponse = {
	studySetId: number;
	label: string;
	time: number;
	stat: StatType;
	userAnswers: UserAnswerType[];
};
type StatType = {
	correct: number;
	wrong: number;
	percentage: number;
	total: number;
};

type UserAnswerType = {
	question_id: number;
	content: string;
	explaination: string;
	isCorrect: boolean;
	choices: ChoiceType[];
};

type ChoiceType = {
	id: number;
	content: string;
	isUserAnswer: boolean;
	isCorrectAnswer: boolean;
};

export type { ExamAnswerResultResponse };
