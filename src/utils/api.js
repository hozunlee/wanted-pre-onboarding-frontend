import axios from 'axios';
const access_token = window.localStorage.getItem('userJWT');

import React, { useState } from 'react';

// const useApi = () => {
//   const [createApi, setCreateApi] = useState();
//   const api = axios.create({
//     baseURL: 'https://pre-onboarding-selection-task.shop/',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//       accept: 'application/json,',
//       Authorization: `Bearer  ${access_token ? access_token : null}`,
//     },
//   });
//   setCreateApi(api);
//   return createApi;
// };

// export default useApi;

const api = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
    Authorization: `Bearer  ${access_token ? access_token : null}`,
  },
});

export const apis = {
  //Login
  PostSignUp: (data) => api.post('/auth/signup', data), // 회원가입
  PostSignIn: (data) => api.post('/auth/signin', data), // 로그인

  //TODO
  getTodos: (signal, JWTInfo) =>
    api.get('/todos', {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
      signal,
    }), //Todo page 접속 시
  createTodo: (todo, JWTInfo) =>
    api.post('todos', todo, {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
    }), // 새로운 TODo 추가
  updateTodo: (id, updateTodo, JWTInfo) =>
    api.put(`/todos/${id}`, updateTodo, {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
    }),
  deleteTodo: (id, JWTInfo) =>
    api.delete(`/todos/${id}`, {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
    }),
};
