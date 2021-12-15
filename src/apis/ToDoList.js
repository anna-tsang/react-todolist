import api from "./api";

export const getToDoList = () => {
    return api.get('/ToDoList');
}

export const addToDoItem = (item) => {
    return api.post("/ToDoList", item);
}

export const updateToDoItem = (item) => {
    return api.put("/ToDoList/" + item.id, item);
}

export const deleteToDoItem = (id) => {
    return api.delete("/ToDoList/" + id);
}
