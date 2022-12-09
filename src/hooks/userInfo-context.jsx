import { createContext, useContext, useState } from 'react';

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [JWTInfo, setJWTInfo] = useState({
    JWT: window.localStorage.getItem('userJWT'),
  });
  const addJWT = (JWT) => setJWTInfo(JWT);
  return (
    <UserInfoContext.Provider value={{ JWTInfo, addJWT }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
