import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from '../../../action/crud-action'


function TodoInput() {
    const inputRef = useRef()
    const [load, setload] = useState(true)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputRef.current.value))
        setload(!load)
    }
    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = ''
    }, [load])

    return (
        <form onSubmit={handleSubmit} className="todo__input">
            <input ref={inputRef} type="text" placeholder="Nhập công việc" />
            <input type="submit" value={'+'} />
        </form>
    )
}

export default TodoInput