// lib imports
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// CSS import
import "./index.css";

// Componenets importing
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import PageError from "./Components/404Page";
import Form from "./Components/Form";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import Aboutus from "./Components/About Us/Aboutus";
import Contactus from "./Components/Contact us/Contactus";

function App() {
  return (
    <>
      <main>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={"about"} />
            <Route path="/booking" element={<Form />} />
            <Route path="/services" element={"services"} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
