export default function TodoList(props) {
    return(
       // <div className="TodoList">
          //  This is to do list function

        //</div>

        <ul>
            {
                props.todos.map(todo=>(
                    <li>{todo.text}</li>
                ))
            }  
        </ul>

    );
}