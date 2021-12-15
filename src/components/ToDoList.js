import ToDoGroup from "./ToDoGroup";
import ToDoGenerator from "./ToDoGenerator";
import { useState } from "react";
import "../style/ToDoList.css"

function ToDoList() {
    const [toDoTextList] = useState([]);

    return (
        <div>
            <h1>🕒Todo List🕒</h1>
            <ToDoGroup toDoTextList={toDoTextList}></ToDoGroup>
            <ToDoGenerator></ToDoGenerator>
        </div>
    );
}

export default ToDoList;