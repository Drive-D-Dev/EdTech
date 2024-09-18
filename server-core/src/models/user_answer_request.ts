type User_Answer_Request = {
    setId: number;
    time: number;
	Question: {
		question_id: number;
		choice_id: number;
	}[];
};

export type { User_Answer_Request };
