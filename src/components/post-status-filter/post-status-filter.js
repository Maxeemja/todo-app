import React, {Component} from 'react';


export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'active', label: 'Активные'},
            {name: 'completed', label: 'Завершенные'}
        ]
    }

    render(){
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                    key={name} 
                    className={`btn ${clazz}`}
                    onClick={() => this.props.onFilterSelect(name)}>{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}
