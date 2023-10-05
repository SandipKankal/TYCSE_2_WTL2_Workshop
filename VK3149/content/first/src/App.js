import logo from './logo.svg';
import './App.css';
import TodoList from './todolist';
function App() {
  const todos=[
    {id:1,text:"Vedshree",done:false},
    {id:2,text:"aaaad",done:false},
    {id:3,text:"bhdegf",done:false}
  ];
  return (
    <div className="App">
      <h1>To do List</h1>
      
      <TodoList todos ={todos}></TodoList>
    </div>
  );
}

export default App;
