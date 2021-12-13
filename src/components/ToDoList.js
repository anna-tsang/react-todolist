import { useState } from "react";

function ToDoList() {

    const [todoText, setTodoText] = useState("This is the first todo item.");
    
    return (
        <div>
            <p>{todoText}</p>
        </div>
    );
}

export default ToDoList;