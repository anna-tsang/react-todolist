import { ADD_TODO, UPDATE_TODO, DELETE_TODO, INIT_TODO ,UPDATE_CONTENT} from "../constants/constants";
import "../style/ToDoList.css"


const initState = {toDoTextList: []};

const ToDoReducer = ( state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {toDoTextList: [...state.toDoTextList, action.payload]}; 
        case UPDATE_TODO: 
            return {
                toDoTextList: state.toDoTextList.map(item => {
                    if(item.id === action.payload.data.id){
                        item.done = !item.done;
                    }
                    return item;
            })};
        case DELETE_TODO:
            return {
                toDoTextList: state.toDoTextList.filter(
                    item => item.id !== action.payload
                )}; 
        case INIT_TODO:
            return {toDoTextList:  action.payload}; 

        case UPDATE_CONTENT:
            return {
                toDoTextList: state.toDoTextList.map(item => {
                    if(item.id === action.payload.data.id){
                        item.text = action.payload.data.text;
                    }
                    
                    return item;
            })};
        default:
            return state;
    }
}

export default ToDoReducer;