import React from 'react';

const AddWord = ({ repository }) => {
  return (
    <div>
      <form action=''>
        <label htmlFor=''>
          author
          <input type='text' />
        </label>
        <label htmlFor=''>
          from
          <input type='text' />
        </label>
        <label htmlFor=''>
          item
          <input type='text' />
        </label>
      </form>
    </div>
  );
};

export default AddWord;
