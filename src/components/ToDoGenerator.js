import { useState } from "react";

function ToDoGenerator(){

    const [todoText, setTodoText] = useState("");

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText(event) {
        event.preventDefault();
        console.log(todoText);
    }
    

    return(
        <form onSubmit={submitToDoText}>
            <input type="text" onChange={handleToDoText}></input>
            <input type="submit"></input>
        </form>
    );
}

export default ToDoGenerator;