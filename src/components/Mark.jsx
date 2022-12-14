import React, { useReducer, useRef, useState } from 'react';
import {
  PencilSquareIcon,
  TrashIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/solid';
import { apis } from '../utils/api';

import { useUserInfo } from '../hooks/userInfo-context';

const Mark = ({ todo, getTodoList }) => {
  const [isCheck, setIsCheck] = useState(todo?.isCompleted);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !todo.id);
  const urlRef = useRef(null);

  const { JWTInfo } = useUserInfo();
  // console.log('🚀 ~ file: Mark.jsx:13 ~ Mark ~ JWTInfo', JWTInfo);

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      await apis.updateTodo(
        todo.id,
        {
          todo: urlRef.current.value ?? todo.todo,
          isCompleted: isCheck,
        },
        JWTInfo.JWT
      );
      getTodoList();
      toggleEditing();
    } catch (e) {
      console.error(e);
    }
  };

  const onUpdateCheckBox = async () => {
    setIsCheck((prev) => !prev);
    try {
      await apis.updateTodo(
        todo.id,
        {
          todo: urlRef.current?.value ?? todo.todo,
          isCompleted: !isCheck,
        },
        JWTInfo.JWT
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onDelete = async () => {
    try {
      await apis.deleteTodo(todo.id, JWTInfo.JWT);
      getTodoList();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='  group mb-1 box-border cursor-pointer rounded border-2 border-yellow-400 bg-white p-1 hover:bg-gray-50 w-72'>
      {isEditing ? (
        <>
          <form action='' className='flex'>
            <input
              type='text'
              ref={urlRef}
              className='mb-2 w-full rounded p-1.5'
              placeholder={todo.todo}
            />
            <button onClick={onUpdate} className='mr-2 mb-1 rounded-full px-2 '>
              <ArrowPathRoundedSquareIcon className='  text-black w-5' />
            </button>
          </form>
        </>
      ) : (
        <div className='flex w-full items-center '>
          <input
            className='m-1 w-10'
            onClick={onUpdateCheckBox}
            type='checkbox'
            name='isUpdateCheck'
            id='isUpdateCheck'
            defaultChecked={isCheck}
          />

          <div>{todo.todo}</div>
        </div>
      )}

      <div className='item-center hidden group-vi mr-3 justify-end group-hover:flex'>
        <button
          onClick={() => toggleEditing()}
          className='mb-1 mr-1 rounded-full bg-cyan-400 p-2 hover:bg-cyan-500'
        >
          <PencilSquareIcon className='w-4 text-white' />
        </button>
        <button
          className='mb-1 rounded-full bg-rose-400 p-2 hover:bg-rose-500'
          onClick={onDelete}
        >
          <TrashIcon className='w-4 text-white' />
        </button>
      </div>
    </div>
  );
};

export default Mark;
