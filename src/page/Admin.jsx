import { useEffect, useState } from 'react';
import AddWord from '../components/AddWord';

const Admin = ({ repository }) => {
  const [sentences, setSentences] = useState();
  // const [loading, setLoading ]= useState

  const updateInfo = (info) => {
    setSentences((infos) => {
      const updated = { ...infos };
      updated[info.id] = info;
      return updated;
    });
    repository.storeInfo(info);
  };

  // db 초기에 불러오기
  useEffect(() => {
    const stopRead = repository.readInfo((value) => {
      setSentences(value);
    });
    return stopRead;
  }, [repository]);

  useEffect(() => {
    console.log('sentences :>> ', sentences);
  }, [sentences]);

  return (
    <div className='m-10'>
      <div className='m-5 flex text-center justify-center text-xl'>
        {' '}
        굿모닝 여기는 관리자 페이지
      </div>
      <AddWord updateInfo={updateInfo} />

      <ul>
        {sentences &&
          sentences?.map((sentence) => {
            return <li key={sentence.id}>{sentence.item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Admin;
