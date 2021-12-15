import ToDoItems from "./ToDoItems";
import {  useSelector } from "react-redux";
import "../style/ToDoList.css"

function DoneList() {
    const toDoTextList = useSelector((state) => state.toDoTextList);

    return(
        <div>
            <h1>✔️Done List✔️</h1>
            {
                toDoTextList.filter(item => item.done).map((item)=>
                <ToDoItems key={item.id} todoItem={item.text} ></ToDoItems>)
            }
        </div>
    );
}

export default DoneList;