import { useState } from "react";
import {useDispatch} from "react-redux";
import {UPDATE_TODO_TEXT} from "../constants/constants"


function ToDoGenerator(props){

    const [toDoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText(event) {
        if(!(toDoText === "")){
            dispatch({type: UPDATE_TODO_TEXT, payload: toDoText});
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