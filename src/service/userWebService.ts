import $api from '../http/axiosApi';

export const getUsersWebService = async (endpoint: string) => {
	const {data} = await $api.get(endpoint);
	return data;
};

export const getCurrentUserWebService = async (
	name: string,
	endpoint: string
) => {
	const {data} = await $api.post(endpoint, {name});
	return data;
};

export const blockUserWebService = async (id: string) => {
	const {data} = await $api.patch('/status/block', {id});
	return data;
};

export const unblockUserWebService = async (id: string) => {
	const {data} = await $api.patch('/status/unblock', {id});
	return data;
};
