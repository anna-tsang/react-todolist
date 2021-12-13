import { useState } from "react";

function ToDoGenerator(props){

    const [toDoText, setTodoText] = useState("");

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText(event) {
        event.preventDefault();
        props.updateToDoText(toDoText);
    }

    return(
        <form onSubmit={submitToDoText}>
            <input type="text" onChange={handleToDoText}></input>
            <input type="submit"></input>
        </form>
    );
}

export default ToDoGenerator;