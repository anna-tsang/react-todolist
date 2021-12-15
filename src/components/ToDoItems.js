import {useDispatch} from "react-redux";
import {UPDATE_TODO, DELETE_TODO} from "../constants/constants";
import "../style/ToDoList.css"

function ToDoItems(props) {

    const dispatch = useDispatch();

    function updateToDo(){//naming
        dispatch({type: UPDATE_TODO, payload: props.id})
    }

    function deleteToDo(){
        dispatch({type: DELETE_TODO, payload: props.id})
    }

    return (
        <div className="todo-item-border" >
            <span className={props.done? "done": null } onClick={updateToDo}>{props.todoItem}</span>
            <span><button onClick={deleteToDo} className="delete-button">X</button></span>
        </div>
    );
}

export default ToDoItems;