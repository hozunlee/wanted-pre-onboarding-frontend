import React, { useEffect, useState } from 'react';

import { apis } from '../utils/api';

import AddMarkInput from '../components/AddMarkInput';
import Mark from '../components/Mark';

const Todo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);

  const onSubmitHandler = (todoWord) => {
    (async () => {
      try {
        const { data } = await apis.createTodo({ todo: todoWord });
        todoList.push(data);
        setTodoList([...todoList]);
      } catch (e) {
        console.error(e);
      }
    })();
  };

  const getTodoList = async (signal) => {
    const { data } = await apis.getTodos(signal);
    setTodoList(data);
  };

  useEffect(() => {
    const ctl = new AbortController();
    const { signal } = ctl;
    try {
      getTodoList(signal);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <div className='text-xl bg-orange-900'>나는야 투두</div>
      {todoList.length ? (
        todoList.map((todo) => (
          <Mark key={todo.id} todo={todo} getTodoList={getTodoList} />
        ))
      ) : (
        <hr className='border-3 mt-0 mb-3 border-white' />
      )}

      <AddMarkInput onSubmitHandler={onSubmitHandler} />
    </>
  );
};

export default Todo;
