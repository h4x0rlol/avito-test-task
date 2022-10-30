import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { getFetchIndicesArray } from '../helpers';
import { Item } from '../types/Item.interface';
import { baseUrl } from './hacker-news-api';

const startIndex = 0;
const endIndex = 100;

type ResultType = {
	data: Item[];
	error?: FetchBaseQueryError;
	meta?: FetchBaseQueryMeta;
};

export const newsService = createApi({
	reducerPath: 'newsService',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getNews: build.query<Item[], number>({
			async queryFn(page, _queryApi, _extraOptions, fetchWithBQ) {
				const newsIds = await fetchWithBQ('newstories.json');
				if (newsIds.error) {
					return { error: newsIds.error as FetchBaseQueryError };
				}

				const result: ResultType = {
					data: [],
				};
				let ids = newsIds.data as number[];
				ids = getFetchIndicesArray(
					ids.slice(startIndex, endIndex),
					page
				);

				await Promise.all(
					ids.map((el) => fetchWithBQ(`item/${el}.json`))
				).then((res) =>
					res.forEach((el) => {
						result.data.push(el.data as Item);
						result.error = el.error;
						result.meta = el.meta;
					})
				);

				console.log('request');

				return result.data
					? { data: result.data as Item[] }
					: {
							error: result.error as FetchBaseQueryError,
					  };
			},
		}),
	}),
});
