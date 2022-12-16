import React, { useRef } from 'react';
import uuid from 'react-uuid';

const AddWord = ({ updateInfo }) => {
  const formRef = useRef();
  const authorRef = useRef();
  const fromRef = useRef();
  const itemRef = useRef();

  const onAdd = (e) => {
    e.preventDefault();
    const info = {
      id: uuid(), //uuid
      author: authorRef.current.value || '',
      from: fromRef.current.value || '',
      item: itemRef.current.value || '',
    };
    updateInfo(info);
    formRef.current.reset();
  };

  return (
    <div>
      <form ref={formRef}>
        <label htmlFor=''>
          author
          <input ref={authorRef} type='text' />
        </label>
        <label htmlFor=''>
          from
          <input ref={fromRef} type='text' />
        </label>
        <label htmlFor=''>
          item
          <input ref={itemRef} type='text' />
        </label>
        <button onClick={onAdd}>저장</button>
      </form>
    </div>
  );
};

export default AddWord;
