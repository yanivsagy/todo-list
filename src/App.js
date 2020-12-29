import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ControlBar from './ControlBar';
import ToDoList from './ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoArray: [],
      toDo: '',
    }
  }

  setToDo = (e) => {
    // e.preventDefault();
    this.setState({ toDo: e.target.value });
    console.log(this.state.toDo);
  }

  addToDo = () => {
      const newArray = [].concat(this.state.todoArray);
      newArray.push({ task: this.state.toDo, crossout: false });
      this.setState({ todoArray: newArray });
      this.setState({ toDo: '' });
      console.log(this.state.todoArray);
  }

  addToDoClick = () => {
    if (this.state.toDo.length > 0) {
      this.addToDo();
    }
  };

  addToDoKeyDown = (e) => {
    //e.preventDefault();
    if (this.state.toDo.length > 0 && e.key === 'Enter') {
      this.addToDo();
    }
  };

  deleteToDo = (index) => {
    const newArray = [].concat(this.state.todoArray);
    newArray.splice(index, 1);
    this.setState({ todoArray: newArray });
  }

  crossedOutToDo = (index) => {
    const crossed = !this.state.todoArray[index].crossout;

    const newArray = [].concat(this.state.todoArray);
    newArray[index].crossout = crossed;
    this.setState({ todoArray: newArray });
  }

  render() {
    return (
      <div>
        <h1 className='tc f-5 white'>To Do List</h1>
        <ControlBar toDo={this.state.toDo} setToDo={this.setToDo} addToDoClick={this.addToDoClick} addToDoKeyDown={this.addToDoKeyDown} />
        {
          !this.state.todoArray.length ?
          <h1 className='f1 tc white'>Add To Do List Items!!!</h1> :
          <ToDoList todoArray={this.state.todoArray} deleteToDo={this.deleteToDo} crossedOutToDo={this.crossedOutToDo} />
        }
      </div>
    );
  }
}

export default App;
