import { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<div>
				<p></p>
				{children}
			</div>
		</>
	);
};

export default RootLayout;
