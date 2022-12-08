import { useRef, useState } from 'react';
import Login from '../components/Login';
import Todo from './Todo';

const isLogin = window.localStorage.getItem('userJWT');

const Main = () => {
  return <>{isLogin ? <Todo /> : <Login />}</>;
};

export default Main;
