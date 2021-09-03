import React, {Component} from 'react';

export default class DeleteAllButton extends Component{
    
    render(){
        const {filterState, deleteAll} = this.props;
        let classNames = 'btn-danger dangerbtn'
        if(filterState === 'completed'){
            classNames += ' hidden';
        }

        return(
            <button 
                className={classNames}
                onClick={deleteAll}>Delete All</button>
        )
    }

}