import { PropTypes } from "prop-types"

export const TodoItem = ({ id, description, done, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li key={id} className="list-group-item d-flex justify-content-between">
                <span className={`align-self-center ${(done) ? 'text-decoration-line-through' : ''}`}
                    onClick={() => { onToggleTodo(id) }}
                > {description} </span>
                <button className="btn btn-danger"
                    onClick={() => onDeleteTodo(id)}
                >Borrar</button>
            </li>
        </>

    )
}


TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,

}