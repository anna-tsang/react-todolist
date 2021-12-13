import ToDoItems from "./ToDoItems";

function ToDoGroup(props) {

    return(
        <div>
            {
                (props.toDoTextList).map((item,index)=>(
                    <ToDoItems key={item + index} todoItem={item}></ToDoItems>
                ))
            }
        </div>
        
    );
}

export default ToDoGroup;