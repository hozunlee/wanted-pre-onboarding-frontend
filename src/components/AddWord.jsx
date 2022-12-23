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
    itemRef.current.value = '';
  };

  return (
    <div className=''>
      <form ref={formRef} className='flex-col flex items-center w-full'>
        <label htmlFor=''>
          author
          <input
            ref={authorRef}
            type='text'
            autoComplete='on'
            className='border ml-2 mb-2'
          />
        </label>
        <label htmlFor=''>
          from
          <input
            ref={fromRef}
            type='text'
            autoComplete='on'
            className='border ml-2 mb-2'
          />
        </label>
        <label htmlFor=''>
          item
          <textarea
            ref={itemRef}
            type='text'
            className='border ml-2 mb-2 h-24 w-full '
          />
        </label>
        <button
          onClick={onAdd}
          className='border px-3 rounded bg-green-500 mb-10'
        >
          저장
        </button>
      </form>
    </div>
  );
};

export default AddWord;
