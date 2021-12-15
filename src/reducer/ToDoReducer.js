import { ADD_TODO, UPDATE_TODO, DELETE_TODO, MOVE_TODO } from "../constants/constants";
import "../style/ToDoList.css"


const initState = {toDoTextList: []};

const ToDoReducer = ( state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {toDoTextList: [...state.toDoTextList, action.payload]}; 
        case UPDATE_TODO: 
            return {
                toDoTextList: state.toDoTextList.map(item => {
                    if(item.id === action.payload){
                        item.done = !item.done;
                    }
                    return item;
            })};
        case DELETE_TODO:
            return {
                toDoTextList: state.toDoTextList.filter(
                    item => item.id !== action.payload
                )}; 
        case MOVE_TODO:
            return {
                doneTextList: state.doneTextList.filter(
                    item => item.done === action.payload
                )};
        default:
            return state;
    }
}

export default ToDoReducer;