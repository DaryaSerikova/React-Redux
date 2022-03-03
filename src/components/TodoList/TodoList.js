import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css'


function TodoList({ todos }) {

  const elements = todos.map((item) => {

    const {id, ...itemProps} = item; // для того, чтобы не передавать в свойствах лишнее свойство id для TodoListItem

    return (
      <li key={id} className='list-group-item todo-list'>
        <TodoListItem { ...itemProps} /> 
        {/* Spread оператор для передачи всех свойств*/}
      </li>
    );
  });

  return(
    <ul className='list-group'>
      {elements}
    </ul>
  );
}

export default TodoList;

// const elements = todos.map((item) => {
//     return (
//       <li>
//         <TodoListItem 
//             label={item.label}
//             important={item.important} /> // Стандартно
//       </li>
//     );
//   });