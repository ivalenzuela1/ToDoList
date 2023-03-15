import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import ToDoList from './ToDoList.js';
import NewToDo from './NewToDo.js';
import ThisToDo from './ThisToDo.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {todoList: []}

      this.addToDo= this.addToDo.bind(this);
      this.deleteToDo= this.deleteToDo.bind(this); 
    }

    componentDidMount = () => {
      const todos = localStorage.getItem("todolist");
      if (todos) {
        const savedTodos = JSON.parse(todos);
        this.setState({ todoList: savedTodos });
      } else {
        console.log("You have nothing to do, go get some rest");
      }
    };

    addToDo(data){
     //create unique key
     var newList = this.state.todoList.slice();
     newList.push(data);
     this.setState({todoList: newList});
     localStorage.setItem('todolist', JSON.stringify(newList));
   }

   deleteToDo(id){
     //create unique key
     var ts = new Date().getTime();
   }


    render(){

    return ( <div>
        <h1>To Do List:</h1>
        <Route exact path="/" render={(props) => <ToDoList {...props} list={this.state.todoList}  deleteToDo={this.deleteToDo}/>} />
        <Route exact path="/new" render={(props) => <NewToDo {...props} addToDo={this.addToDo} />} />
        <Route path="/:id" render={(props) => <ThisToDo {...props} todos={this.state.todoList}  />} />

    </div>)
    }
};

export default App;


//<Route exact path="/new" component={NewToDo} />

//<ToDoList list={this.state.todoList}  />

//<Route exact path="/new" render={(props) => <NewToDo {...props} />} />

//<Route exact path="/" component={ToDoList} />

//<Route path="/about" render={(props) => <About {...props}/>} />
//<Route path="/contact" component={Contact} />
