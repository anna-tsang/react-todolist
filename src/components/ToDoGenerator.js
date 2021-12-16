import { useState } from "react";
import {useDispatch} from "react-redux";
import {ADD_TODO} from "../constants/constants"
import "../style/ToDoList.css"
import { addToDoItem } from "../apis/ToDoList";
import { Button } from 'antd';
import { Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';

function ToDoGenerator(){

    const [toDoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    function handleToDoText(event) {
        setTodoText(event.target.value);
    }

    function submitToDoText() {
        if(!(toDoText.trim() === "")){
            addToDoItem({text: toDoText.trim(), done:false}).then((response)=>{
                dispatch({type: ADD_TODO, payload: response.data})
            })
        }
        setTodoText("");
    }

    return(
        <div>
            <Input size="large" placeholder="Please input Todo List" value={toDoText} onChange={handleToDoText} prefix={<FormOutlined />} />
            <Button type="primary" onClick={submitToDoText} prefix={<FormOutlined />}>Add</Button >
        </div>
    );
}

export default ToDoGenerator;