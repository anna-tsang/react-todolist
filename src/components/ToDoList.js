import ToDoGroup from "./ToDoGroup";
import ToDoGenerator from "./ToDoGenerator";
import { useState } from "react";

function ToDoList() {
    const [toDoTextList, setToDoTextList] = useState([]);

    function updateToDoText(toDoText){
        setToDoTextList((prev) => ([...prev,toDoText]));
    }

    return (
        <div>
            <ToDoGroup toDoTextList={toDoTextList}></ToDoGroup>
            <ToDoGenerator updateToDoText={updateToDoText}></ToDoGenerator>
        </div>
    );
}

export default ToDoList;