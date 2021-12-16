import {useDispatch} from "react-redux";
import { deleteToDoItem, updateToDoItem } from "../apis/ToDoList";
import {UPDATE_TODO, DELETE_TODO, UPDATE_CONTENT} from "../constants/constants";
import "../style/ToDoList.css"
import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Modal, Input } from 'antd';




function ToDoItems(props) {

    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [updatedContent, setUpdatedContent] = useState([]);

    function updateToDoStatus(){
        updateToDoItem({id: props.id, text: props.text, done: !props.done}).then((response) => {
            dispatch({type: UPDATE_TODO, payload: response})
        })
    }

    function deleteToDo(){
        deleteToDoItem(props.id).then((response) => {
            dispatch({type: DELETE_TODO, payload: response.data.id});
        })
    }

    function handleContentChange(event) {
        setUpdatedContent(event.target.value);
    }

    function updateToDoText() {
        if(!(updatedContent.trim() === "")){
            updateToDoItem({id: props.id, text: updatedContent, done: props.done}).then((response) => {
                dispatch({type: UPDATE_CONTENT, payload: response})
            })
        }
        setUpdatedContent("");
    }

    const displayModal = () => {
        setIsModalVisible(true);
        setUpdatedContent(props.todoItem);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        updateToDoText();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="todo-item-border">
            <span className={props.done? "done": null} onClick={updateToDoStatus} >{props.todoItem}</span>
            <CloseCircleOutlined size={"small"} type="primary" className="float-right" onClick={deleteToDo}></CloseCircleOutlined>
            <EditOutlined size={"small"} type="primary" className="float-right" onClick={displayModal}></EditOutlined>

            <Modal title="Please input your content" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input style={{ width: 450 }} placeholder="Please input Todo List" value={updatedContent} onChange={handleContentChange} className="input-field"></Input>
            </Modal>

        </div>
    );
}

export default ToDoItems;