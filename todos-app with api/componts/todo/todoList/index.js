import { useEffect, useState } from "react"
import { fetchTodos, deleteTodo, updateTodo } from "../../../services/reques"
import { useDispatch, useSelector } from "react-redux"
import { refresh, sub, set } from '../../../action/refresh-action'
import { AiOutlineReload, AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function TodoList(props) {
    const complete = props.props
    console.log(complete)
    const isRefresh = useSelector(state => state.refreshReducer.state)
    const dispatch = useDispatch()
    const [todos, setTodos] = useState([])
    const handleDelete = (id) => {
        dispatch(sub())
        dispatch(refresh())
        deleteTodo(id)
    }
    const handleCompleted = (id, completed) => {
        updateTodo(id, completed)
        dispatch(refresh())
        console.log(isRefresh)
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTodos()
            dispatch(set(data.length))
            setTodos(data)
        }
        fetchData()
    }, [isRefresh])
    return (
        <div className="todo__list">
            <ul>
                {[...todos.filter((item) => (item.completed == complete))].map((item) => {
                    return (
                        <li key={item.id}>
                            <div>{item.todo}</div>
                            <AiFillCloseCircle className="btn btn-close" onClick={() => handleDelete(item.id)} />
                            {!complete && <AiFillCheckCircle className="btn-check" onClick={() => handleCompleted(item.id, item.completed)} />}
                            {complete && <AiOutlineReload className="btn-reload" onClick={() => handleCompleted(item.id, item.completed)} />}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList