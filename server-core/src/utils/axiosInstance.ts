import axios from 'axios';

const AI_Axios = axios.create({
	baseURL: Bun.env.AI_API_URL || '',
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

export { AI_Axios };
