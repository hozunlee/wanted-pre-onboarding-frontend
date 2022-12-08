import { useRef, useState } from 'react';
import Login from '../components/Login';

const Main = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default Main;

/* 
이메일과 비밀번호의 유효성 검사기능을 구현해주세요
이메일 조건: @ 포함
비밀번호 조건: 8자 이상
입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.
*/
