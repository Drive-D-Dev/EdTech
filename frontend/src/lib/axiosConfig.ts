import axios, { AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
	baseURL: process.env.AXIOS_BASE_URL || '',
	withCredentials: true,
	validateStatus: (status) => status >= 200 && status < 500,
});

export { Axios };
