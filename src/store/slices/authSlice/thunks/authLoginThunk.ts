import {createAsyncThunk} from '@reduxjs/toolkit';

import {loginWebService} from '../../../../service/authWebService';
import {IUser} from '../../../../models/IUser';

export const login = createAsyncThunk(
	'auth/login',
	async (user: IUser, thunkAPI) => {
		try {
			const data = await loginWebService(user, '/auth/login');
			if (data) {
				localStorage.setItem('name', data.name);
				localStorage.setItem('auth', 'true');
				localStorage.setItem('token', data.token);
				return data;
			} else {
				throw Error('incorrect');
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
