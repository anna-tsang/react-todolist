import ToDoItems from "./ToDoItems";
import {  useSelector } from "react-redux";
import "../style/ToDoList.css"

function UnDoneList() {
    const toDoTextUndoneList = useSelector((state) => state.toDoTextList.filter(item => !item.done));

    return(
        <div>
            <h1>❌UnDone List❌</h1>
            {
                toDoTextUndoneList.map((item)=>
                <ToDoItems key={item.id} todoItem={item.text} id={item.id} done={item.done}></ToDoItems>)
            }
        </div>
    );
}

export default UnDoneList;