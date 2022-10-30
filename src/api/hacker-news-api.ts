import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';

export const axiosConfig = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});
