import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';

import {IAuthUser} from '../../../models/IUser';
import {login, logout, setUser} from './thunks';
import {authInitialState} from './authTypes';

const initialState: authInitialState = {
	isAuth: false,
	user: {} as IAuthUser,
	isLoading: false,
	isError: '',
};
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
			state.isLoading = false;
			state.isError = '';
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
	extraReducers: {
		[login.fulfilled.type]: (state, action: PayloadAction<IAuthUser>) => {
			state.isAuth = true;
			state.isError = '';
			state.isLoading = false;
			state.user = action.payload;
		},
		[login.pending.type]: (state) => {
			state.isLoading = true;
			state.isError = '';
		},
		[login.rejected.type]: (state, action) => {
			state.isAuth = false;
			state.isLoading = false;
			state.isError = action.payload.response.data.message;
		},
		[logout.fulfilled.type]: (state) => {
			state.isAuth = false;
			state.isError = '';
			state.isLoading = false;
			state.user = {} as IAuthUser;
		},
		[logout.pending.type]: (state) => {
			state.isLoading = true;
			state.isError = '';
		},
		[logout.rejected.type]: (state, action) => {
			state.isAuth = false;
			state.isLoading = false;
			state.isError = action.payload.response.data.message;
		},
		[setUser.fulfilled.type]: (state, action: PayloadAction<IAuthUser>) => {
			state.isAuth = true;
			state.isError = '';
			state.isLoading = false;
			state.user = action.payload;
		},
		[setUser.pending.type]: (state) => {
			state.isLoading = true;
			state.isError = '';
		},
		[setUser.rejected.type]: (state) => {
			state.isAuth = false;
			state.isLoading = false;
			state.isError = 'Error with get current user..';
		},
	},
});

export const authSelector = (state: RootState) => state.auth;
export const {setAuth, setLoading} = authSlice.actions;
export default authSlice.reducer;
