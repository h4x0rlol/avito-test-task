import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { Item } from '../types/Item.interface';
import { ResultType } from '../types/Result.type';
import { baseUrl } from './hacker-news-api';

// You can decrease RTK query cache lifetime by passing keepUnusedDataFor here or refetchOnMountOrArgChange in hooks to faster data updates

export const commentsService = createApi({
	reducerPath: 'commentsService',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getComments: build.query<Item[], number[]>({
			async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
				const result: ResultType = {
					data: [],
				};

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

				return result.data[0]
					? { data: result.data as Item[] }
					: {
							error: result.error as FetchBaseQueryError,
					  };
			},
		}),
	}),
});
