import axios from 'axios';
const access_token = window.localStorage.getItem('userJWT');

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
  getTodos: () => api.get('/todos'), //Todo page 접속 시
  createTodo: (todo) => api.post('todos', todo), // 새로운 TODo 추가
  updateTodo: (id, updateTodo) => api.put(`/todos/${id}`, updateTodo),
  deleteTodo: (id) => api.delete(`/todos/${id}`),
};
