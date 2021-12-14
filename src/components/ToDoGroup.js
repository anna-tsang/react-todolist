import ToDoItems from "./ToDoItems";
import { useSelector } from "react-redux";
import "../style/ToDoList.css"

function ToDoGroup() {
    const toDoTextList = useSelector((state) => state.toDoTextList);

    return(
        <div>
            {
                toDoTextList.map((item,index)=>(
                    <ToDoItems key={item + index} todoItem={item.text} id={item.id} done={item.done}></ToDoItems>
                ))
            }
        </div>
    );
}

export default ToDoGroup;