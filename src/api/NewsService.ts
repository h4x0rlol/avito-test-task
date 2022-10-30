import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './Urls';

export const newsService = createApi({
	reducerPath: 'newsService',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getNewsIds: build.query<number[], null>({
			query: () => ({
				url: 'newstories.json',
			}),
		}),
	}),
});
