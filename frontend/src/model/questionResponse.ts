type QuestionResponse = {
  id: number;
  content: string;
  Choice: Choice_Qres[];
};

type Choice_Qres = {
  id: number;
  content: string;
  number: number;
  question_id: number;
};

export type { QuestionResponse };
