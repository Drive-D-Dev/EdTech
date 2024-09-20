import { PUBLIC_PATH } from '@/constant/global';
import { usePathname, useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useUserContext } from './context';
import { verifyAPI } from '@/api/verify';

const VerifyProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const path = usePathname() ?? 'ERROR';
	const [isPathPublic, setIsPathPublic] = useState(PUBLIC_PATH.includes(path.split('/')[1]));
	const user = useUserContext();

	useEffect(() => {
		setIsPathPublic(PUBLIC_PATH.includes(path.split('/')[1]));
	}, [path]);

	useEffect(() => {
		verifyAPI().then((res) => {
			if (res.success) {
				user.setState((prevState) => ({
					isLogin: true,
					email: res.data.email,
					name: res.data.name,
					id: res.data.id,
					setState: prevState.setState,
				}));
				setIsLoading(false);
			} else {
				user.setState((prevState) => ({
					isLogin: false,
					setState: prevState.setState,
				}));
				if (!PUBLIC_PATH.includes(path.split('/')[1])) router.push('/auth/login');
			}
		});
	}, [path]);

	const LoadingComponent: FC = () => {
		return (
			<div className='flex justify-center items-center h-screen w-full'>
				<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary' />
			</div>
		);
	};

	return <>{isLoading && !isPathPublic ? <LoadingComponent /> : children}</>;
};

export { VerifyProvider };
