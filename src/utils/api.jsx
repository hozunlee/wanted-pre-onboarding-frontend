import axios from 'axios';
const api = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export const apis = {
  //Login
  PostSignUp: (data) => api.post('/auth/signup', data), // 회원가입
  PostSignIn: (data) => api.post('/auth/signin', data), // 회원가입
};
