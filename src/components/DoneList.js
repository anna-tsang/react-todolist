import ToDoItems from "./ToDoItems";
import {  useSelector } from "react-redux";
import "../style/ToDoList.css"

function DoneList() {
    const toDoTextDoneList = useSelector((state) => state.toDoTextList.filter(item => item.done));

    return(
        <div>
            <h1>✔️Done List✔️</h1>
            {
                toDoTextDoneList.map((item)=>
                <ToDoItems key={item.id} todoItem={item.text} id={item.id} done={item.done}></ToDoItems>)
            }
        </div>
    );
}

export default DoneList;