import ToDoGroup from "./ToDoGroup";
import ToDoGenerator from "./ToDoGenerator";
import { useState } from "react";

function ToDoList() {
    const [toDoText, setTodoText] = useState([]);
    const [toDoTextList] = useState([]);

    function updateToDoText(toDoText){
        setTodoText(toDoText);
        toDoTextList.push(toDoText);
    }

    return (
        <div>
            <ToDoGroup toDoTextList={toDoTextList}></ToDoGroup>
            <ToDoGenerator updateToDoText={updateToDoText}></ToDoGenerator>
        </div>
    );
}

export default ToDoList;