import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home">Home2</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <hr />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
         </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/post/:id">
          <PostDetails></PostDetails>
          </Route>
        
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
