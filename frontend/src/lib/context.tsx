'use client';
import { UserContextType } from '@/model/userContext';
import { createContext, FC, ReactNode, useContext, useState } from 'react';

// Create the context with default values
const UserContext = createContext<{
	state: UserContextType;
	setState: React.Dispatch<React.SetStateAction<UserContextType>>;
}>({
	state: { isLogin: false },
	setState: () => {},
});

// Custom hook to use UserContext
const useUserContext = () => useContext(UserContext);

// Provider component to wrap the app
const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, setState] = useState<UserContextType>({ isLogin: false });

	return <UserContext.Provider value={{ state, setState }}>{children}</UserContext.Provider>;
};

export { UserContextProvider, useUserContext };
