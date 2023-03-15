
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';


class NewToDo extends React.Component{

    constructor(props){
        super(props);
        this.submitNew = this.submitNew.bind(this);
        this.state = {newItem:[]}
    }

    submitNew(e){ 

         e.preventDefault();

        let newTitle = document.getElementById("newTitle");
        let newNotes = document.getElementById("newNotes");
        let id = (new Date()).getTime();

        let newItem = {id: id, title: newTitle.value, notes: newNotes.value};
        this.props.addToDo(newItem);

        //reset
        document.getElementById("newTitle").value = "";
        document.getElementById("newNotes").value = "";

        //Go back to list automatically

        this.props.history.push('/');
  
    }

    render(){ 
        return(
            <div>
            <form onSubmit={this.submitNew}>
                <input type="text" id="newTitle" placeholder="Enter Title"></input><br />
                <input type="text" id="newNotes" placeholder="Enter Notes"></input><br /><br />
                <input type="submit"></input>
             </form>

             <Link to='/'><button>cancel</button></Link>
            </div>
        )
    
    }
}

export default NewToDo;
