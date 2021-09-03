import React, {Component} from 'react';

export default class PostListItem extends Component {



    render(){
        const {label, onDelete, onToggleCompleted, onToggleLiked, completed, like} = this.props;


        let classNames = 'app-list-item d-flex justify-content-between';
        if (completed) {
            classNames += ' completed';
        } 
        if (like) {
            classNames += ' like';
        } 
        
        
        return (
            <div className = {classNames}>
                <span className = "app-list-item-label" onClick={onToggleLiked}>
                    {label}
                </span>
                <div className = "d-flex justify-content-space-between align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm" 
                    onClick={onToggleCompleted}>
                        <i class="fas fa-check"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm" 
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}