import React, { useEffect, useState } from 'react';
import { firebase_db } from '../firebaseConfig';

const Sentence = ({ repository }) => {
  const [data, setData] = useState([]);
  const [todaysQuote, setTodaysQuote] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let stopRead;
    (async () => {
      try {
        stopRead = repository.readInfo((value) => {
          setData(value);
          setTodaysQuote(value[Math.floor(Math.random() * data.length)]);
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    })();
    return stopRead;
  }, [repository]);

  useEffect(() => {
    const stopRead = repository.readInfo((value) => {
      setData(value);
      setTodaysQuote(value[Math.floor(Math.random() * data.length)]);
      setLoading(false);
    });

    return stopRead;
  }, [repository]);

  function getNewQuote() {
    setLoading(true);
    let todaysQuote1 = data[Math.floor(Math.random() * data.length)];
    setTodaysQuote(todaysQuote1);
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <div>로딩중</div>
      ) : (
        <div className='w-full flex mb-10 flex-col content-center justify-center'>
          <div className='pb-10 px-4 text-justify '>{todaysQuote.item}</div>
          <div className=' text-gray-500 text-sm'>
            <p className='text-gray-500  text-xs'>from</p>
            {todaysQuote.from}
          </div>
          <div className='text-sm text-gray-500'>{todaysQuote.author}</div>
          <button
            className='rounded bg-black text-white text-sm p-1'
            onClick={() => getNewQuote()}
          >
            new cake🧀
          </button>
        </div>
      )}
    </>
  );
};

export default Sentence;
