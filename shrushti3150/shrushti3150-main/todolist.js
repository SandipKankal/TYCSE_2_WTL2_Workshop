export default function TodoList(props)
{
    return(
        <ul>
            {
                // eslint-disable-next-line array-callback-return
                props.todos.map(todos =>{
                    <li>{todos.text}</li>
                })
            }
        </ul>
    )
}