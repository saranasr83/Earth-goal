import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper"


function App() {
  return (
    <div className="App">
      <h1 style={{marginTop:"45px"}}>
        <a style={{ textDecoration: "none",fontSize:"35px",color:"black"}} href="/">
        Earth Goal
        </a>
      </h1>
      <Navbar />
      {/* <Wrapper/> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
