import React, { useEffect, useState } from 'react';
import { firebase_db } from '../firebaseConfig';

const Sentence = ({ repository }) => {
  const [data, setData] = useState([]);
  const [todaysQuote, setTodaysQuote] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stopRead = repository.readInfo((value) => {
      setData(value);
    });

    return stopRead;
  }, [repository]);

  // useEffect(() => {
  //     getNewQuote();
  // }, [data]);

  function getNewQuote() {
    let todaysQuote1 = data[Math.floor(Math.random() * data.length)];
    setTodaysQuote(todaysQuote1);
  }

  return <div>아이엠 문장</div>;
};

export default Sentence;
