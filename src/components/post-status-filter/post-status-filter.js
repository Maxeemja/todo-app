import React, {Component} from 'react';


export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'completed', label: 'Completed'}
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
