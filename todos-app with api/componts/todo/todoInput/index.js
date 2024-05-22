import { useEffect, useRef, useState } from "react"
import { PostTodo } from "../../../services/reques"
import { useDispatch, useSelector } from "react-redux"
import { refresh, add } from '../../../action/refresh-action'


function TodoInput() {
    const inputRef = useRef()
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const counter = useSelector(state => state.refreshReducer.counter)
    const handleSubmit = (e) => {
        e.preventDefault();
        PostTodo(counter + 1, todo)
        dispatch(refresh())
        dispatch(add())
        setTodo('')
    }
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <form onSubmit={handleSubmit} className="todo__input">
            <input onChange={(e) => setTodo(e.target.value)} value={todo} ref={inputRef} type="text" placeholder="Nhập công việc" />
            <input type="submit" value={'+'} />
        </form>
    )
}

export default TodoInput