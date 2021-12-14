import ToDoGroup from "./ToDoGroup";
import ToDoGenerator from "./ToDoGenerator";
import { useState } from "react";
import "../style/ToDoList.css"

function ToDoList() {
    const [toDoTextList] = useState([]);


    return (
        <div>
            <ToDoGroup toDoTextList={toDoTextList}></ToDoGroup>
            <ToDoGenerator></ToDoGenerator>
        </div>
    );
}

export default ToDoList;