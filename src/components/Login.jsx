import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apis } from '../utils/api';

const Login = () => {
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
      alert('로그인에 성공했습니다.');
      navigate('/todo');
    } catch (error) {
      console.error('error :>> ', error.response.data.message);
      alert(error.response.data.message);
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
      <div>hojun dev</div>
      <form>
        <input
          onChange={onChangeId}
          type='text'
          placeholder='이메일 주소'
          required
        />
        <input
          onChange={onChangePw}
          type='password'
          placeholder='비밀번호'
          required
        />
        <button onClick={onLogin} disabled={!loginCondition}>
          로그인
        </button>
      </form>

      <div>
        <button onClick={onSignUp} disabled={!loginCondition}>
          회원가입
        </button>
      </div>
    </>
  );
};

export default Login;
