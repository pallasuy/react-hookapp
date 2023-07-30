import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo,onToggleTodo }) => {
    return (

        <>
            <ul className="list-group">
                {
                    todos.map(
                        (todo) => (
                            //TodoItem
                            <TodoItem key={todo.id} {...todo}
                             onDeleteTodo={onDeleteTodo}
                             onToggleTodo={onToggleTodo}
                              />
                        )
                    )
                }
            </ul>
        </>
    )
}
