import axios from 'axios';

const BASE_URL = 'https://pre-onboarding-selection-task.shop/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
    Authorization: null,
  },
});

const authAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      accept: 'application/json,',
      Authorization: null,
    },
  });
  console.log('π ~ file: api.js:23 ~ authAPI ~ api', api);
  interceptors(api);
  return api;
};

const interceptors = (api) => {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('userJWT');

      config.headers = {
        authorization: token ? `bearer ${token}` : null,
      };
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  return api;
};

export const apis = {
  //Login
  PostSignUp: (data) => authAPI().post('/auth/signup', data), // νμκ°μ
  PostSignIn: (data) => authAPI().post('/auth/signin', data), // λ‘κ·ΈμΈ

  //TODO
  getTodos: (signal, JWTInfo) =>
    authAPI().get('/todos', {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
      signal,
    }), //Todo page μ μ μ

  createTodo: (todo, JWTInfo) =>
    api.post('todos', todo, {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
    }), // μλ‘μ΄ TODo μΆκ°

  updateTodo: (id, updateTodo, JWTInfo) =>
    api.put(`/todos/${id}`, updateTodo, {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
    }),

  deleteTodo: (id, JWTInfo) =>
    api.delete(`/todos/${id}`, {
      headers: { Authorization: `Bearer  ${JWTInfo}` },
    }),
};
