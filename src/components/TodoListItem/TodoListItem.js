import React, {Component} from 'react';

import './TodoListItem.css';

class TodoListItem extends Component {

  constructor() {// Консервативный способ прикрутки this к event
    super();

    this.state = {
      done: false,
      important: false
    };

    this.onLabelClick = () => {
      this.setState(({done}) => {
        return {
          done: !done
        };
      });
      // console.log(`Done: ${this.props.label}`);
    };
  }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      };
    });
  }
  // state = { //с помощью Class Fields (Полей Класса)
  //   done: false
  // };
  // onLabelClick = () => { //Еще способ прикрутить this с помощью Class Fields (Полей Класса)
  //   console.log(`Done: ${this.props.label}`);
  // };


  render() {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames ="todo-list-item";
    
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }
    // const style = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // };

  
    return (
      <span className={classNames}>
      {/* {console.log(important, style.color, style.fontWeight)} */}
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}

export default TodoListItem;

// const TodoListItem = (props) => { // Стандартная передача пропсов
//   return(
//     <span>{props.label}</span>
//   );
// }



// Здесь передача пропсов через деструктуризацию
// const TodoListItem = ({label, important = false}) => { 

//     //   const style = {
//     //     color: important ? 'tomato' : 'black'
//     //   };
      
//     //   console.log(important, style.color)
    
//       return(
//         //<span style={style}>{label}</span>
//       );
//     }
    
    // const TodoListItem = (props) => { // Стандартная передача пропсов
    //   return(
    //     <span>{props.label}</span>
    //   );
    // }