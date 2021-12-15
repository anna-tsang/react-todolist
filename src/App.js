import './App.css';
import ToDoList from './components/ToDoList';
import DoneList from "./components/DoneList";
import UnDoneList from './components/UnDoneList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav className="navigation">
          <ul>
              <Link to="/" className="navigation-tab">ToDoList🕒</Link>
              <Link to="/Done" className="navigation-tab">Done✔️</Link>
              <Link to="/UnDone" className="navigation-tab">UnDone❌</Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/Done">
            <DoneList></DoneList>
          </Route>
          <Route exact path="/UnDone">
            <UnDoneList></UnDoneList>
          </Route>
          <Route exact path="/">
          <ToDoList></ToDoList>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
