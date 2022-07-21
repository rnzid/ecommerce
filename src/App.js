import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import About from "./components/About";
import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />}/>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
