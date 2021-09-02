import React, {Component} from 'react';
import { convertTypeAcquisitionFromJson } from 'typescript';

export default class PostAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        const formm = document.querySelector('form');
    }
    
    

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render(){
        const { filterState} = this.props;
        console.log(filterState)
        let classNames = 'bottom-panel d-flex';
        if(filterState === 'completed'){
            classNames = 'bottom-panel completed'   
        } 
        
        return ( 
            <form 
                className={classNames}
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    type="submit" 
                    className="btn btn-outline-secondary"
                    >
                    Добавить
                </button>
            </form>
        )
    }
};
