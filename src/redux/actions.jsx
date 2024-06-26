// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 5, name: 'Learn Skdke', completed: false, priority: "Medium"}
// }

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
