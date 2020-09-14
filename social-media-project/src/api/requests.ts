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
const signUpUser = (data: signUpData) =>
  axios.post(`https://reactdevcampapi.com/signup`, data, {
    withCredentials: true,
  });
const signInUser = (data: signInData) =>
  axios.post(`https://reactdevcampapi.com/signin`, data, {
    withCredentials: true,
  });

export const Requests = {
  signUpUser,
  signInUser,
};
