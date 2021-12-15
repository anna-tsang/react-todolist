import { useState } from "react";
import {useDispatch} from "react-redux";
import {ADD_TODO} from "../constants/constants"
import { v4 as uuidv4 } from "uuid";
import "../style/ToDoList.css"

function ToDoGenerator(){

    const [toDoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText(event) {
        const id = uuidv4();
        if(!(toDoText.trim() === "")){
            dispatch({type: ADD_TODO, payload: {id, text: toDoText, done: false}});
        }
        setTodoText("");
    }

    return(
        <div>
            <input type="text" placeholder="Please input Todo List" value={toDoText} onChange={handleToDoText} className="input-field"></input>
            <input type="submit" className="button" value="Add" onClick={submitToDoText}></input>
        </div>
    );
}

export default ToDoGenerator;