import React, {Component} from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault(); // чтобы не было перезагрузки страницы
        // при отправке формы.Иначе state будет принимать значение''
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return(
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text" 
                className='form-control'
                onChange={this.onLabelChange}
                placeholder="What need to be done"
                value={this.state.label}></input>
                <button 
                    className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}