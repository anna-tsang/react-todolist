import './App.css';
import ToDoGenerator from './components/ToDoGenerator';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ToDoList></ToDoList>
      <ToDoGenerator></ToDoGenerator>
    </div>
  );
}

export default App;
