import React from "react";
import '../index.css';

const Form = (props) => {

    const { TaskSubmit, NameChange } = props;

    var Enter = (
        <>
        <form className="inputform" onSubmit={TaskSubmit}>
            <label className="form-label">Task Input:
                <input type="text" onChange={NameChange} id="task-write" name="task-write" placeholder="Enter brief task description here" />
            </label>
            <button id="Enter" type="submit">Enter</button>
        </form>
        </>
    );
    return(Enter);
}

export default Form;