import { useState } from 'react';
import Form from './Components/Form';
import Task from './Components/Tasks';
import './App.css';

function App() {

    const [textVal, setTextVal] = useState('');
    const [tasks, setTasks] = useState([]);

    const TaskSubmit = (event) => {
        var arg = textVal;
        if (arg !== '') {
            setTextVal('');
            setTasks([...tasks, { num: tasks.length, name: arg }]);
        }
        event.preventDefault();
    }

    const NameChange = (event) => {
        setTextVal(event.target.value);
    }

    const TrashButton = () => {
        var temp = document.getElementById('selected-task').value;
        var tempArr = [];
        document.getElementById('selected-task').remove();
        for(var i=0; i<tasks.length; i++) {
            if(tasks[i] == temp) {
                continue;
            }
            tempArr = [{ num: (tasks.length - i - 1), name: tasks.get(i) }, ...tempArr];
        }
        setTasks(tempArr);
    }

    const DoneButton = () => {
        var selected_task = document.getElementById('selected-task');
        if(selected_task.style.textDecoration === 'line-through') {
            selected_task.style.textDecoration = 'none';
            selected_task.style.color = 'black';
        }
        else {
            selected_task.style.textDecoration = 'line-through';
            selected_task.style.color = 'green';
        }
    }

    const html = (
        <>
            <div className='Header'>
                <h1>To Do List</h1>
            </div>
            <div className="Main-Tab">
                <div className="Tasks-Display" id="TasksDisp">
                    <Task tasks={tasks} />
                </div>
                <div className="Tasks-Options" id="TasksOpt">
                    <button className="trash" onClick={TrashButton}><i className="glyphicon glyphicon-trash"></i></button>
                    <button className="done" onClick={DoneButton}><i className="glyphicon glyphicon-ok"></i></button>
                </div>
            </div>
            <div className="Tasks-Input" id="TasksInput">
                <Form textVal={textVal} tasks={tasks} TaskSubmit={TaskSubmit} NameChange={NameChange} />
            </div>
        </>
    );
    return (html);
}

export default App;