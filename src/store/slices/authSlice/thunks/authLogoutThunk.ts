import {createAsyncThunk} from '@reduxjs/toolkit';

import {logoutWebService} from '../../../../service/authWebService';

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await logoutWebService('/auth/logout');

		localStorage.removeItem('name');
		localStorage.removeItem('auth');
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
