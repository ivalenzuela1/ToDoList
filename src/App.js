import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import ToDoList from './ToDoList.js';
import NewToDo from './NewToDo.js';
import ThisToDo from './ThisToDo.js';



class App extends React.Component{

  constructor(){
    super();
    this.state = {
        todoList: [{ id: 1,
                     title: 'Finish HW',
                     completed: false,
                     notes: 'Finish my ReactJS HW'
                     },

                     { id: 2,
                      title: 'Rock Climb',
                      completed: false,
                      notes: 'go rock climbing'
                      },
                   
                     { id: 3,
                      title: 'Trail Run',
                      completed: false,
                      notes: 'go trail running'
                      }
                    ]
                }

      this.addToDo= this.addToDo.bind(this);
      this.deleteToDo= this.deleteToDo.bind(this); 
      

    }

    addToDo(data){
     //create unique key
     var newList = this.state.todoList.slice();
     newList.push(data);
     this.setState({todoList: newList});
     console.log(newList);
   }

   deleteToDo(id){
     //create unique key
     var ts = (new Date()).getTime();
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
