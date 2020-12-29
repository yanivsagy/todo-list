import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todoArray, deleteToDo, crossedOutToDo}) => {
    return (
        <div>
            { todoArray.map((todoElement, index) => {
                return <ToDo id={index} task={todoElement.task} deleteToDo={deleteToDo} crossedOutToDo={crossedOutToDo} crossed={todoElement.crossout}/>
            }) }
        </div>
    );
}

export default ToDoList;