import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import ProductMain from "./components/Products/ProductMain";
import "./App.css";


const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route exact path="/" element = {<Home/>}></Route> 
        <Route exact path="/products" element = {<ProductMain/>}></Route> 
     </Routes>
    </>
  );
}

export default App;
