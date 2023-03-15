
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';


class ThisToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = { todo: []}
     //   this.showCurrentTodo = this.showCurrentTodo.bind(this);

    }

    componentDidMount(){
        var id = this.props.match.params.id;
        let todo = this.props.todos.filter((todo) => todo.id === id)
        this.setState({todo: todo});
    }

    render(){
        console.log("this");
        console.log(this);
        return(
            <div>
            <h1>test:{this.props.match.params.title}</h1>
            <div> This is location to show current To Do</div>

            <div> {JSON.stringify(this.state.todo)}</div>
            <div> {JSON.stringify(this.props.notes)}</div>


            <Link to='/'><button>BACK TO LIST</button></Link>
            </div>

        )
    
    }
}

export default ThisToDo;