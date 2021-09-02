import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import DeleteAllButton from '../delete-all-btn/delete-all-btn';
import styled from 'styled-components';


import '../post-add-form/post-add-form.css'
import '../post-list/post-list.css'
import '../post-list-item/post-list-item.css'
import '../delete-all-btn/delete-all-btn.css'
import '../search-panel/search-panel.css'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', completed: false, like:false, id:1},
                {label: 'That is good', completed: true, like:false, id:2},
                {label: 'Nicee', completed: false, like:false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleCompleted = this.onToggleCompleted.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
       
    }
    
    deleteItem(id) {
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before , ...after];
            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data})=> {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleCompleted(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, completed: !old.completed}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return{
                data: newArr
            }
        })
    }

    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return{
                data: newArr
            }
        })
    }

    searchPost(items, term){
        if (term.length === 0){
            return items
        }
        
        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        })
    }
    
    filterPost(items, filter){
        
        if (filter === 'active'){
            return items.filter(elem => elem.completed === false)
        } 
        if(filter === 'completed'){ 
            return items.filter(elem => elem.completed)
        }
        else {
            return items
        }
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

    render(){
        const {data, term, filter} = this.state;
        
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        
        const visiblePosts = this.filterPost(this.searchPost(data, term) , filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className = "search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem} 
                    filterState={this.state.filter}
                    onToggleCompleted={this.onToggleCompleted}
                    onToggleLiked={this.onToggleLiked}
                    
                />
                <button className='btn-danger'>Delete All</button>
                <PostAddForm
                    onAdd={this.addItem}
                    filterState={this.state.filter}/>
            </AppBlock>
        );
    }

    
};
