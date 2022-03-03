import React, {Component} from 'react'
import './App.css';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';



export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      {label: 'Drink coffee', important: 'false', id: 1},
      {label: 'Make Awesome App', important: 'true', id: 2},
      {label: 'Have a lunch', important: 'false', id: 3}
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => { // вместо state сразу деструктуризация
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0,idx), //before
        ...todoData.slice(idx + 1) //after
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    console.log('Added', text);
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={this.deleteItem}
        />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
  
};
