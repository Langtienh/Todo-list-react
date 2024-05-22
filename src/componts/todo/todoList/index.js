import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, updateTodo } from '../../../action/crud-action'
import { AiOutlineReload, AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function TodoList(props) {
    const complete = props.props
    const todos = useSelector(state => state.crudReducer.todos)
    const dispatch = useDispatch()
    return (
        <div className="todo__list">
            <ul>
                {[...todos.filter((item) => (item.completed == complete))].map((item) => {
                    return (
                        <li key={item.id}>
                            <div>{item.todo}</div>
                            <AiFillCloseCircle className="btn btn-close" onClick={() => dispatch(deleteTodo(item.id))} />
                            {!complete && <AiFillCheckCircle onClick={() => dispatch(updateTodo(item.id))} className="btn-check" />}
                            {complete && <AiOutlineReload onClick={() => dispatch(updateTodo(item.id))} className="btn-reload" />}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList