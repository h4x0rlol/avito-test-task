import {
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { Item } from './Item.interface';

export type ResultType = {
	data: Item[];
	error?: FetchBaseQueryError;
	meta?: FetchBaseQueryMeta;
};
