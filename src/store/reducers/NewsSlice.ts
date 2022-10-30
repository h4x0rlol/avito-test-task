import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types/Item.interface';

interface NewsState {
	news: Item[];
	isLoading: boolean;
	error: string;
}

const initialState: NewsState = {
	news: [],
	isLoading: false,
	error: '',
};

export const newsSlice = createSlice({
	name: 'newsSlice',
	initialState,
	reducers: {
		newsFetching(state) {
			state.isLoading = true;
		},
		newsFetchingSuccess(state, action: PayloadAction<Item[]>) {
			state.isLoading = true;
			state.error = '';
			state.news = action.payload;
		},
		newsFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = true;
			state.error = action.payload;
		},
	},
});

export default newsSlice.reducer;
