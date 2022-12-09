import { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login';

const isLogin = window.localStorage.getItem('userJWT');

const Main = () => {
  return <>{isLogin ? <Navigate to='/todo' replace={true} /> : <Login />}</>;
};

export default Main;
