import { useState } from "react";
import {useDispatch} from "react-redux";
import {ADD_TODO} from "../constants/constants"
import "../style/ToDoList.css"
import { addToDoItem } from "../apis/ToDoList";

function ToDoGenerator(){

    const [toDoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText(event) {
        if(!(toDoText.trim() === "")){
            addToDoItem({text: toDoText, done:false}).then((response)=>{
                dispatch({type: ADD_TODO, payload: response.data})
            })
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