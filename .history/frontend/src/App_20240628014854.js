import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/signinPage/signin.js";
import Signup from "./components/signupPage/signup.js";
import Dashboard from "./components/dashboard/dashboard.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;