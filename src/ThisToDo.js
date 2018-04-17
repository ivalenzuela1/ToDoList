
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';


class ThisToDo extends React.Component{
    constructor(props){
        super(props);

        this.state = { todo: ''}
        //this.showCurrentTodo = this.showCurrentTodo.bind(this);

    }

    componentDidMount(){
        var id = this.props.match.params.id;
        console.log(id);
        let todo = this.props.todos.filter((todo) => todo.id === id)
        this.setState({todo: todo});

    }


    render(){
        return(
            <div>
            <h1>This To Do</h1>
            <div> This is location to show current To Do</div><br />

            <div> {JSON.stringify(this.state.todo)}</div>
            <div> {JSON.stringify(this.props.notes)}</div>


            <Link to='/'><button>BACK TO LIST</button></Link>
            </div>

        )
    
    }
}

export default ThisToDo;