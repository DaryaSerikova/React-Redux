import React from 'react'
import './App.css';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';



function App() {

  const todoData = [
    {label: 'Drink coffee', important: 'false', id: 1},
    {label: 'Make Awesome App', important: 'true', id: 2},
    {label: 'Have a lunch', important: 'false', id: 3}
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};


export default App;
