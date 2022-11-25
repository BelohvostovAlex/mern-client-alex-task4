import $api from "../http/axiosApi";

export const getUsersWebService = async (endpoint: string) => {
  try {
    const { data } = await $api.get(endpoint);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUserWebService = async (
  name: string,
  endpoint: string
) => {
  try {
    const { data } = await $api.post(endpoint, { name });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const blockUserWebService = async (id: string) => {
  try {
    const { data } = await $api.patch("/status/block", { id });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const unblockUserWebService = async (id: string) => {
  try {
    const { data } = await $api.patch("/status/unblock", { id });
    return data;
  } catch (error) {
    console.log(error);
  }
};
