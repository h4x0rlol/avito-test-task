import {
	AnyAction,
	Dispatch,
	EmptyObject,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const useAppDispatch = (): ThunkDispatch<
	EmptyObject,
	undefined,
	AnyAction
> &
	Dispatch<AnyAction> => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
