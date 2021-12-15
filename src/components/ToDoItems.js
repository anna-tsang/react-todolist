import {useDispatch} from "react-redux";
import { deleteToDoItem, updateToDoItem } from "../apis/ToDoList";
import {UPDATE_TODO, DELETE_TODO} from "../constants/constants";
import "../style/ToDoList.css"

function ToDoItems(props) {

    const dispatch = useDispatch();

    function updateToDo(){//naming
       
        console.log(props.done);
        updateToDoItem({id: props.id, text: props.text, done: !props.done}).then((response) => {
            dispatch({type: UPDATE_TODO, payload: response.data.id})
        })
    }

    function deleteToDo(){
        deleteToDoItem(props.id).then((response) => {
            dispatch({type: DELETE_TODO, payload: response.data.id});
        })
    }

    return (
        <div className="todo-item-border" >
            <span className={props.done? "done": null} onClick={updateToDo} >{props.todoItem}</span>
            <span><button onClick={deleteToDo} className="delete-button" type="submit">X</button></span>
        </div>
    );
}

export default ToDoItems;