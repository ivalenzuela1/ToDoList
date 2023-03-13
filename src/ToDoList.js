import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NewToDo from './NewToDo.js';
import ThisToDo from './ThisToDo.js';


class ToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.createList = this.createList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  deleteItem(id) {
    console.log("item deleted");
    console.log("id", id);

  }


  createList() {
    //console.log("list", this.props.list);
    //console.log(this.props.deleteToDo);

    const listArr = this.props.list;
    const listHtml = listArr.map((item) => {
      return (
          <li><Link to={`/${item.id}`}><div id={item.id}>{item.title}</div></Link>
          <button onClick={this.deleteItem}> X </button></li>
      )
    });

    return (
      <div>
        <ol>
        {listHtml}
        </ol>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div> {this.createList()} </div>
        <Link to='/new'><button>NEW TODO</button></Link>

      </div>

    )
  }
}


export default ToDoList;