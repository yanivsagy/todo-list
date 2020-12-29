import React from 'react';
import './ControlBar.css'

const ControlBar = ({toDo, setToDo, addToDoClick, addToDoKeyDown}) => {
    return (
        <div className='tc'>
            <input className='pa2' type='text' placeholder='Enter To-Do Item'
            value={toDo} onChange={setToDo} onKeyDown={addToDoKeyDown} />
            <button className='add pa2' onClick={addToDoClick} >Add</button>
        </div>
    );
}

export default ControlBar;