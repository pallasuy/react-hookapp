import { PropTypes } from "prop-types"

export const TodoItem = ({ id, description, done }) => {
    return (
        <>
            <li key={id} className="list-group-item d-flex justify-content-between">
                <span className="align-self-center"> {description} </span>
                <button className="btn btn-danger">Borrar</button>
            </li>
        </>

    )
}


TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,

}