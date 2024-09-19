import axios, { AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_AXIOSBASEURL || '',
	withCredentials: true,
	validateStatus: (status) => status >= 200 && status < 500,
});

export { Axios };
