import { UPDATE_CONTENT, UPDATE_TODO_DONE, DELETE_TODO } from "../constants/constants";


const initState = {toDoTextList: []};

const ToDoReducer = ( state = initState, action) => {
    switch (action.type) {
        case UPDATE_CONTENT:
            return {...state, toDoTextList: [...state.toDoTextList, action.payload]}; 
        case UPDATE_TODO_DONE:
            return {...state, toDoTextList: state.toDoTextList.map(item => {
                if(item.id === action.payload){
                    item.done = !item.done;
                }
                return item;
            })};
        case DELETE_TODO:
            return {...state, toDoTextList: state.toDoTextList.filter(content => content.id !== action.payload)} 
        default:
            return state;
    }
}

export default ToDoReducer;