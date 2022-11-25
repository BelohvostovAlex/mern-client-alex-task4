import axios from "axios";

import $api from "../http/axiosApi";

import { IRegisteredUser, IUser } from "../models/IUser";

export const registerWebService = async (
  user: IRegisteredUser,
  endpoint: string
) => {
  try {
    const { data } = await axios.post(
      process.env.REACT_APP_SERVER_URL + endpoint,
      user
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginWebService = async (user: IUser, endpoint: string) => {
  try {
    const { data } = await $api.post(endpoint, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutWebService = async (endpoint: string) => {
  try {
    const { data } = await $api.post(endpoint);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserWebService = async (id: string, endpoint: string) => {
  try {
    const { data } = await $api.delete(endpoint, { data: { id } });
    return data;
  } catch (error) {
    console.log(error);
  }
};
