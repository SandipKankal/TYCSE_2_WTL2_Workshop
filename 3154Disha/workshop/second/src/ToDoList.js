export default function ToDoList({ todos }) {
    return (
        /*< div className="ToDoList" >
            This is the ToDoList function
        </div>*/
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))
            }
        </ul>
    );
}