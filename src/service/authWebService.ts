import axios from 'axios';

import $api from '../http/axiosApi';

import {IRegisteredUser, IUser} from '../models/IUser';

export const registerWebService = async (
	user: IRegisteredUser,
	endpoint: string
) => {
	const {data} = await axios.post(
		process.env.REACT_APP_SERVER_URL + endpoint,
		user
	);
	return data;
};

export const loginWebService = async (user: IUser, endpoint: string) => {
	const {data} = await $api.post(endpoint, user);
	return data;
};

export const logoutWebService = async (endpoint: string) => {
	const {data} = await $api.post(endpoint);
	return data;
};

export const deleteUserWebService = async (id: string, endpoint: string) => {
	const {data} = await $api.delete(endpoint, {data: {id}});
	return data;
};
