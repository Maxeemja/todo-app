import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';


const PostList = ({posts, onDelete, onToggleCompleted, onToggleLiked, filterState}) => {

    const elements = posts.map((item)=>{
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">

                <PostListItem 
                    {...itemProps} 
                    onDelete={()=> onDelete(id)}
                    filterState={filterState}
                    
                    onToggleCompleted={()=> onToggleCompleted(id)}
                    onToggleLiked={()=> onToggleLiked(id)}
                />
                
            </li>
        )
    });

    return (
        <ListGroup className="app-list list-group">  
            {elements}    
        </ListGroup>
    )
}
export default PostList;