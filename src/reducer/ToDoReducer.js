import { UPDATE_TODO_TEXT } from "../constants/constants";

const initState = {toDoTextList: []};

const ToDoReducer = ( state = initState, action) => {
    switch (action.type) {
        case UPDATE_TODO_TEXT:
            return {...state, toDoTextList: [...state.toDoTextList, action.payload]};
        default:
            return state;
    }
}

export default ToDoReducer;