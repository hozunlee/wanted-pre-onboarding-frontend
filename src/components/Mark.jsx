import React, { useEffect, useReducer, useRef, useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { apis } from '../utils/api';

const Mark = ({ todo, getTodoList }) => {
  const [isCheck, setIsCheck] = useState(todo?.isCompleted);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !todo.id);
  const urlRef = useRef(null);

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      await apis.updateTodo(todo.id, {
        todo: urlRef.current.value ?? todo.todo,
        isCompleted: isCheck,
      });
      getTodoList();
      toggleEditing();
    } catch (e) {
      console.error(e);
    }
  };

  const onUpdateCheckBox = async () => {
    setIsCheck((prev) => !prev);
    try {
      await apis.updateTodo(todo.id, {
        todo: urlRef.current?.value ?? todo.todo,
        isCompleted: !isCheck,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onDelete = async () => {
    try {
      await apis.deleteTodo(todo.id);
      getTodoList();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='group mb-1 box-border cursor-pointer rounded border-2 border-cyan-400 bg-white p-1 hover:bg-gray-50'>
      {isEditing ? (
        <>
          <form action='' className='flex'>
            <input
              type='text'
              ref={urlRef}
              className='mb-2 w-full rounded p-1.5'
              placeholder={todo.todo}
            />
            <button
              onClick={onUpdate}
              className='mb-1 rounded-full bg-rose-400 p-2 hover:bg-rose-500'
            >
              <PencilSquareIcon className='w-4 text-white' />
            </button>
          </form>
        </>
      ) : (
        <div className='flex'>
          <div>{todo.todo}</div>
          <div>
            <input
              onClick={onUpdateCheckBox}
              type='checkbox'
              name='isUpdateCheck'
              id='isUpdateCheck'
              checked={isCheck}
            />
          </div>
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
