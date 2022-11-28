import React from 'react';
import '../index.css';

const Task = (props) => {

    const { tasks } = props;

    const taskClicked = (event) => {
        var selected_task = document.getElementById('selected-task');
        if(selected_task) {
            selected_task.removeAttribute('id');
        }
        if(selected_task != event.target) {
            event.target.setAttribute('id', 'selected-task');
        }
    }

    return(tasks.map(items => (
        <>
        <button className="tasks" onClick={taskClicked}>{items.name}</button>
        </>
        ))
    );
}

export default Task;