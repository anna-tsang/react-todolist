import { useState } from "react";
import ToDoItems from "./ToDoItems";

function ToDoGroup() {

    const [todoText, setTodoText] = useState("This is the first todo item.");
    return(
        <div>
            <p>{todoText}</p>
            <ToDoItems></ToDoItems>
        </div>
        
    );
}

export default ToDoGroup;