import { useState } from "react";
import {useDispatch} from "react-redux";
import {UPDATE_CONTENT} from "../constants/constants"
import { v4 as uuidv4 } from "uuid";

function ToDoGenerator(props){

    const [toDoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText(event) {
        const id = uuidv4();
        const done = false;
        if(!(toDoText === "")){
            dispatch({type: UPDATE_CONTENT, payload: {id: id, text: toDoText, done: done}});
        }
        setTodoText("");
    }

    return(
        <div>
            <input type="text" placeholder="Please input Todo List" value={toDoText} onChange={handleToDoText} className="inputField"></input>
            <input type="submit" className="button" value="Add" onClick={submitToDoText}></input>
        </div>
    );
}

export default ToDoGenerator;