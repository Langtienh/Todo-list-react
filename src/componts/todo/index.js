import TodoInput from "./todoInput"
import TodoList from "./todoList"
import { useSelector } from "react-redux"
import './todo.scss'

function Todo() {
    const total = useSelector(state => state.crudReducer.total)

    return (
        <div className="todo">
            <h1>todo app</h1>
            <h2>Tổng số việc: {total}</h2>
            <TodoInput />
            <h2>Chưa hoàn thành</h2>
            <TodoList props={false} />
            <h2>Đã hoàn thành</h2>
            <TodoList props={true} />
        </div>
    )
}

export default Todo