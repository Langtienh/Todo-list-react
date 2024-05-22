export const updateTodo = (id) => {
    return {
        type: 'updateTodo',
        id: id
    }
}

export const addTodo = (todo) => {
    return {
        type: 'addTodo',
        todo: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'deleteTodo',
        id: id
    }
}