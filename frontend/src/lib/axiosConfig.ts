import { BACKEND_URL } from '@/constant/global';
import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';

const Axiosfnc = (): AxiosInstance => {
	const instance = axios.create({
		baseURL: BACKEND_URL,
		withCredentials: true,
		validateStatus: (status) => status >= 200 && status < 500,
	});

	// Interceptor to set the Authorization header dynamically before every request
	instance.interceptors.request.use((config) => {
		const cookie = cookies.get('userToken');

		if (cookie) {
			config.headers.Authorization = `Bearer ${cookie}`;
		}
		return config;
	});

	return instance;
};

const Axios = Axiosfnc();

export { Axios };
