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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

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
    const newItem = this.createTodoItem(text);

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

  onToggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

      //update object:
      const oldItem = arr[idx];
      const newItem = {...oldItem, // Теперь новый newItem это как старый
        [propName]:!oldItem[propName]}; // но с противоположным done 

      //construct new array
      return [
        ...arr.slice(0, idx), //старые значения before
        newItem, //обновленный элемент
        ...arr.slice(idx + 1)//старые значения after
      ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty( todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty( todoData, id, 'important')
      };
    });
  };

  render() {

    const { todoData } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
//filter - создает новый массив, берем все элементы, у которых
// done===true, И берем длину отфильтрованного массива

    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={todoData} 
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}

        />
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }
  
};
