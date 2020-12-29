import React from 'react';
import './ToDo.css';

const ToDo = ({id, task, deleteToDo, crossedOutToDo, crossed}) => {
    return (
        <div className='tc flex justify-center'>
            <div className='containing flex justify-center w-80 ma0'>
            {
                !crossed ?
                <p className='todo tl w-80 dib pa2 f3' style={{ overflowWrap: 'break-word' }} onClick={(e) => crossedOutToDo(id)}>{task}</p> :
                <p className='todo crossed tl w-80 dib pa2 f3' style={{ overflowWrap: 'break-word' }} onClick={(e) => crossedOutToDo(id)}>{task}</p>
            }
                <button className='delBut' onClick={(e) => deleteToDo(id)}>X</button>
            </div>
        </div>
    );
}

export default ToDo;