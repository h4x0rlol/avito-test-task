import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../../types/Item.interface';

interface NewsState {
	newsIds: number[];
	news: Item[];
	isLoading: boolean;
	error: string;
}

const initialState: NewsState = {
	newsIds: [],
	news: [],
	isLoading: false,
	error: '',
};

export const newsSlice = createSlice({
	name: 'newsSlice',
	initialState,
	reducers: {},
});

export default newsSlice.reducer;
