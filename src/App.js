// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const showalert = (messege, type) => {
    setalert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(24 51 82)";
      showalert("Dark Mode has been enabled", "success");
      // setInterval(() => {
      //   document.title="TextUtiles-is amazing ";

      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtiles Now";

      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light Mode has been enabled", "success");
      // document.title="TextUtiles-light Mode";
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Router>
  <Navbar title="Textutils" togglemode={togglemode}  mode={mode} abouttext="About "/>
  <Alert alert={alert}/>
  <div className="container">
  <Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
        <Textform  showalert={showalert}  heading ="Enter your text below" mode={mode}/>
          </Route>
    </Route>
  </div> 
  </Router> */}
      {/* <About/>  */}
      {/* new syntax */}
      <Router>
        <Navbar
          title="Textutils"
          togglemode={togglemode}
          mode={mode}
          abouttext="About "
        />
        <div className="container">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <div className="container">
                <About mode={mode} />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <div className="container">
                <Textform
                  showalert={showalert}
                  heading="Enter your text below"
                  mode={mode}
                />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
