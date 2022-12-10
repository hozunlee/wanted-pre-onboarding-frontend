import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apis } from '../utils/api';

import { useUserInfo } from '../hooks/userInfo-context';

const Login = () => {
  const { JWTInfo, addJWT } = useUserInfo();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onChangeId = (e) => {
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };

    try {
      const res = await apis.PostSignIn(userInfo);
      console.log('res :>> ', res);
      if (!window.localStorage.getItem('userJWT')) {
        window.localStorage.setItem('userJWT', res.data.access_token);
      }
      addJWT({ JWT: res.data.access_token });
      alert('로그인에 성공했습니다.');
      navigate('/todo');
    } catch (error) {
      console.error('error :>> ', error.response.data.message);
      alert('로그인 정보를 확인해주세요.');
    }
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };

    try {
      const res = await apis.PostSignUp(userInfo);
      console.log('res :>> ', res);
      if (!window.localStorage.getItem('userJWT')) {
        window.localStorage.setItem('userJWT', res.data.access_token);
        alert('회원가입 성공입니다.');
      }
    } catch (error) {
      console.error('error :>> ', error.response.data.message);
      alert(error.response.data.message);
    }
  };

  const loginCondition = email.includes('@') && password.length >= 8;

  return (
    <>
      <div className='bg-white items-center text-center'>
        <div className='mx-16 mt-16 text-5xl font-extrabold'>살아갈 결심</div>
        <div className='m-3'>To-Do list</div>
        <form className=''>
          <div className='  flex flex-col justify-center items-center w-full'>
            <input
              className='border block w-auto my-3 p-1 rounded-lg'
              onChange={onChangeId}
              type='text'
              placeholder='이메일 주소'
              required
            />
            <input
              className='border block w-auto my-3 p-1 rounded-lg'
              onChange={onChangePw}
              type='password'
              placeholder='비밀번호'
              required
            />
          </div>
          <button
            className='border rounded-full w-36 m-3 h-10 bg-blue-500 text-white disabled:bg-gray-200'
            onClick={onLogin}
            disabled={!loginCondition}
          >
            로그인
          </button>
        </form>
        <div>
          <button
            className='border rounded-full w-36 h-10 bg-yellow-500 text-white disabled:bg-gray-200 '
            onClick={onSignUp}
            disabled={!loginCondition}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
