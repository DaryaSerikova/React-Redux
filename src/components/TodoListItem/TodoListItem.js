import React, {Component} from 'react';

import './TodoListItem.css';

class TodoListItem extends Component {

  constructor() {// Консервативный способ прикрутки this к event
    super();

    this.state = {
      done: false
    };

    this.onLabelClick = () => {
      this.setState({
        done: true
      });
      // console.log(`Done: ${this.props.label}`);
    };
  }
  // state = { //с помощью Class Fields (Полей Класса)
  //   done: false
  // };
  // onLabelClick = () => { //Еще способ прикрутить this с помощью Class Fields (Полей Класса)
  //   console.log(`Done: ${this.props.label}`);
  // };


  render() {

    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames ="todo-list-item";
    
    if (done) {
      classNames += " done";
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

  
    return (
      <span className={classNames}>
      {console.log(important, style.color, style.fontWeight)}
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
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