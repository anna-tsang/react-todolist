import ToDoGroup from "./ToDoGroup";
import ToDoGenerator from "./ToDoGenerator";
import { useEffect, useState } from "react";
import "../style/ToDoList.css"
import { getToDoList } from "../apis/ToDoList";
import { useDispatch } from "react-redux";
import {INIT_TODO} from "../constants/constants";

function ToDoList() {
    const dispatch = useDispatch();
    const [toDoTextList] = useState([]);
    useEffect(() => {
        getToDoList().then((response)=>{
            dispatch({
                type: INIT_TODO,
                payload: response.data
            })
        })
    })

    return (
        <div>
            <h1>🕒Todo List🕒</h1>
            <ToDoGenerator></ToDoGenerator>
            <ToDoGroup toDoTextList={toDoTextList}></ToDoGroup>
            
        </div>
    );
}

export default ToDoList;