import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { getFetchIndicesArray } from '../helpers';
import { Item } from '../types/Item.interface';
import { ResultType } from '../types/Result.type';
import { baseUrl } from './hacker-news-api';

const startIndex = 0;
const endIndex = 100;

// You can decrease RTK query cache lifetime by passing keepUnusedDataFor here or refetchOnMountOrArgChange in hooks to faster data updates

export const newsService = createApi({
	reducerPath: 'newsService',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getNewsById: build.query<Item, number>({
			query: (id) => ({
				url: `item/${id}.json`,
			}),
		}),
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
						result.meta = el.meta;
						if (el.error) {
							result.error = el.error;
						}
					})
				);

				console.log('request');

				return result.data[0]
					? { data: result.data as Item[] }
					: {
							error: result.error as FetchBaseQueryError,
					  };
			},
		}),
	}),
});
