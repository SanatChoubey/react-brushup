import React, { useState, useCallback, useEffect } from 'react'
import './App.css'
import ReusableInput from './inputComponent';
import TodoList from './todoList';
import { CircularProgress } from '@chakra-ui/react';

const initialState = {
  list: [],
  loader: false,
  enteredText: undefined
}

function TodoListApp() {
  const [todoListState, setTodoListState] = useState(initialState);
  console.log('Main App is re : Rendered 😓')
  useEffect(() => {
    console.log('entered', todoListState.enteredText);
  }, [todoListState.enteredText])
  // const debounce = (fn) => {
  //   let timerFlag;
  //   const that = this
  //   return function (...args) {
  //     if(timerFlag) clearTimeout(timerFlag)
  //     timerFlag =  setTimeout(() => {
  //       fn.apply(that, args)
  //     }, 2000)
      
  //   }
  // }
  const onChangeTextFunc = (event) => {
    setTodoListState({
      ...todoListState,
      enteredText: event.target.value
    })
  }
  const enterEvent = (event) => {
    if(event.key === 'Enter'){
      if(todoListState.enteredText) {
        setTodoListState({
          ...todoListState,
          loader: true
        })
        setTimeout(() => {
          setTodoListState({
            ...todoListState,
            list: [...todoListState.list,  todoListState.enteredText],
            loader: false
          })
        }, 2000)
        
      }
      
    }
  }
  if(todoListState.loader) {
    return (
      <div className="App">
        <CircularProgress isIndeterminate color='green.300' />
      </div>
    )
  }
  return (
    <div className="App">
      TODO LIST! 😎
       <ReusableInput enterEvent={enterEvent} onChange={onChangeTextFunc}/>
       <TodoList todoListItem={todoListState.list} />
    </div>
  )
}

export default TodoListApp
