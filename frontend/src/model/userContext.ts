type UserContextType = {
	isLogin: boolean;
	id?: number;
	name?: string;
	email?: string;
	setState?: React.Dispatch<React.SetStateAction<UserContextType>>;
};

export type { UserContextType };
