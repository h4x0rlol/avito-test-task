import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../../types/Item.interface';

interface NewsState {
	news: Item[];
}

const initialState: NewsState = {
	news: [],
};

export const newsSlice = createSlice({
	name: 'newsSlice',
	initialState,
	reducers: {},
});

export default newsSlice.reducer;
