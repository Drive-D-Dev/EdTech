import { BACKEND_URL } from '@/constant/global';
import axios, { AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
	baseURL: BACKEND_URL,
	withCredentials: true,
	validateStatus: (status) => status >= 200 && status < 500,
});

export { Axios };
