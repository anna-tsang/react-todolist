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
            <input type="text" onChange={handleToDoText} className="inputField"></input>
            <input type="submit" className="button"></input>
        </form>
    );
}

export default ToDoGenerator;