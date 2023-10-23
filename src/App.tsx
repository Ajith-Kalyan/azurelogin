/*eslint-disable*/
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMsal } from "@azure/msal-react";

function App() {
  const { instance } = useMsal();

  function login() {
    instance.loginRedirect().catch((err) => {
      console.log("log in error caught");
      console.log(err);
    });
  }
  function signout() {
    instance.logout().catch((err) => {
      console.log("log in error caught");
      console.log(err);
    });
  }
  useEffect(() => {
    instance.initialize().then(login);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={login}>click me</button>
        <button onClick={signout}>sign out</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
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
