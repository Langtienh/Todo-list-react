const DOMAIN_API = 'http://localhost:4000/todos/'

export const fetchTodos = async () => {
    const respons = await fetch(DOMAIN_API)
    const data = await respons.json()
    console.log('call api success')
    return data
}

export const PostTodo = async (id, todo) => {
    await fetch(DOMAIN_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: `${id}`,
            todo: todo,
            completed: false
        })
    })
    console.log('post api success')
}

export const updateTodo = async (id, completed) => {
    await fetch(`${DOMAIN_API}${id}`, {
        method: 'PATCH', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            completed: !completed,
        })
    })
    console.log('update api success')
}

export const deleteTodo = async (id) => {
    await fetch(`${DOMAIN_API}${id}`, {
        method: 'DELETE',
    })
    console.log('delete api success')
}