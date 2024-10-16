type AI_JSON_TYPE = {
	topic: string;
	describe: string;
	questions: AI_QUESTION[];
};

type AI_QUESTION = {
	question: string;
	options: string[];
	answer: number;
	explanation: string;
	question_category: string;
	question_subcategory: string;
};

export { AI_JSON_TYPE, AI_QUESTION };
