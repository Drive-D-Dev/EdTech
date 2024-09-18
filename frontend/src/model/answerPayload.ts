type AnswerPayload = {
  setId: number;
  time: number;
  Question: {
    question_id: number;
    choice_id: number;
  }[];
};

export type { AnswerPayload };
