/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commentsService } from '../api/CommentsService';
import { newsService } from '../api/NewsService';
import newsReducer from './reducers/NewsSlice';

const rootReducer = combineReducers({
	newsReducer,
	[newsService.reducerPath]: newsService.reducer,
	[commentsService.reducerPath]: commentsService.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				newsService.middleware,
				commentsService.middleware
			),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
