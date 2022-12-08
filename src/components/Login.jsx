import React, { useState } from 'react';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  // const idRef = useRef(null);
  // const pwRef = useRef(null);

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    // console.log(idRef.current?.value);
  };

  const loginCondition = inputId.includes('@') && inputPw.length >= 8;

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
          type='text'
          placeholder='비밀번호'
          required
        />
        <button onClick={onLogin} disabled>
          로그인
        </button>
      </form>

      <div>
        <button>회원가입</button>
      </div>
    </>
  );
};

export default Login;
