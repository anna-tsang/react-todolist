import ToDoItems from "./ToDoItems";
import { useSelector } from "react-redux";

function ToDoGroup() {
    const toDoTextList = useSelector((state) => state.toDoTextList);

    return(
        <div>
            {
                toDoTextList.map((item,index)=>(
                    <ToDoItems key={item + index} todoItem={item.toDoText}></ToDoItems>
                ))
            }
        </div>
        
    );
}

export default ToDoGroup;