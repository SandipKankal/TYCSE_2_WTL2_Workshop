import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'

function App() {
  const todos = [
    { id: 1, text: "task1", done: false },
    { id: 2, text: "task2", done: false },
    { id: 3, text: "task3", done: false }
  ];
  return (
    <div className="App">
      <h1>To do list</h1>
      <ToDoList todos={todos}></ToDoList>
    </div>
  );
}
export default App;
