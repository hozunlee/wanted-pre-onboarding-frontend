import { Navigate } from 'react-router-dom';
import Login from '../components/Login';
import { useUserInfo } from '../hooks/userInfo-context';

// const isLogin = window.localStorage.getItem('userJWT');

const Main = () => {
  const { JWTInfo } = useUserInfo();

  return (
    <>{JWTInfo?.JWT ? <Navigate to='/todo' replace={true} /> : <Login />}</>
  );
};

export default Main;
