import { useState } from "react";

function ToDoGenerator(props){

    const [toDoText, setTodoText] = useState("");

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText(event) {
        if(!(toDoText === "")){
            props.updateToDoText(toDoText);
        }
        setTodoText("");
    }

    return(
        <div>
            <input type="text" value={toDoText} onChange={handleToDoText} className="inputField"></input>
            <input type="submit" className="button" value="Add" onClick={submitToDoText}></input>
        </div>
    );
}

export default ToDoGenerator;