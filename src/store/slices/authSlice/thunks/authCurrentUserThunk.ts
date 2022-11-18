import {createAsyncThunk} from '@reduxjs/toolkit';

import {getCurrentUserWebService} from '../../../../service/userWebService';

export const setUser = createAsyncThunk(
	'auth/setUser',
	async (name: string, thunkAPI) => {
		try {
			const data = await getCurrentUserWebService(name, '/auth/currentUser');
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
