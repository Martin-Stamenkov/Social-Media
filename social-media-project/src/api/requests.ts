import axios from 'axios';

export type signUpData = {
  name: string;
  username: string;
  password: string;
};
export type signInData = {
  username: string;
  password: string;
};
//Post
const signUpUser = async (data: signUpData) =>
  await axios.post(`https://reactdevcampapi.com/signup/`, data, {
    withCredentials: true,
  });
const signInUser = async (data: signInData) =>
  await axios.post(`https://reactdevcampapi.com/signin/`, data, {
    withCredentials: true,
  });

// GET
const getMe = async () => {
  await axios.get(`https://reactdevcampapi.com/users/me`, {
    withCredentials: true,
  });
};

export const Requests = {
  signUpUser,
  signInUser,
  getMe,
};
