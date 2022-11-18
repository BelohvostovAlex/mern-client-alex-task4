import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../..';
import {getUsers} from './thunks';

import {IFullInfoUser} from '../../../models/IUser';
import {userInitialState} from './userTypes';

const initialState: userInitialState = {
	users: [] as IFullInfoUser[],
	isLoading: false,
	isError: '',
};
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		blockUserStatus: (state, action: PayloadAction<string>) => {
			state.users = state.users.map((user) =>
				user._id === action.payload ? {...user, status: 'Blocked'} : user
			);
		},
		unblockUserStatus: (state, action: PayloadAction<string>) => {
			state.users = state.users.map((user) =>
				user._id === action.payload ? {...user, status: 'Active'} : user
			);
		},
		deleteUser: (state, action: PayloadAction<string>) => {
			state.users = state.users.filter((user) => user._id !== action.payload);
		},
	},
	extraReducers: {
		[getUsers.fulfilled.type]: (
			state,
			action: PayloadAction<IFullInfoUser[]>
		) => {
			state.isError = '';
			state.isLoading = false;
			state.users = action.payload;
		},
		[getUsers.pending.type]: (state) => {
			state.isLoading = true;
			state.isError = '';
		},
		[getUsers.rejected.type]: (state, action) => {
			state.isLoading = false;
			state.isError = action.payload.response.data.message;
			state.users = [];
		},
	},
});

export const userSelector = (state: RootState) => state.user;
export const {unblockUserStatus, blockUserStatus, deleteUser} =
	userSlice.actions;
export default userSlice.reducer;
