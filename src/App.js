import './App.css';
// import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")

  const [mode1, setmode1] = useState("light")

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#37377f";
      showAlert("Dark mode is enabled!", "success");
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "success");
    }
  }

  const togglemode1 = () => {
    if (mode1 === "light") {
      setmode1("#237b9f");
      document.body.style.backgroundColor = "#237b9f";
      showAlert("Dark mode is enabled!", "success");
    }
    else {
      setmode1("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "success");
    }
  }

  return (
    <>
      <Navbar title="Navbars" about="About us" mode={mode} mode1={mode1} togglemode={togglemode} togglemode1={togglemode1} />
      <div className="container my-3">
        <Alert alert={alert} />
        <Textform showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}
{/* <Router> */ }
{/* <Routes> */ }
{/* <Route path='/' element={<Textform showAlert={showAlert} mode={mode} />} />
            <Route path="/about" element={<About />} /> */}
{/* </Routes> */ }
{/* </Router> */ }

export default App;
