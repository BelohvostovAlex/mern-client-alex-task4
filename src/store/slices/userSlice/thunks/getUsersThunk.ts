import {createAsyncThunk} from '@reduxjs/toolkit';

import {getUsersWebService} from '../../../../service/userWebService';

export const getUsers = createAsyncThunk(
	'user/getUsers',
	async (_, thunkAPI) => {
		try {
			const data = await getUsersWebService('/auth/users');
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
