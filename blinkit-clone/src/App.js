import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import ProductMain from "./components/Products/ProductMain";
import Dashboard from "./components/Dashboard/Dashboard";
import Datagrid from "./components/Dashboard/Datagrid";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { login_success } from "./Store/user_slice";
import { getProducts } from "./Store/product_slice";
import Address from "./components/Address/Address";
import { getAddresses } from "./Store/address_slice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    const item = localStorage.getItem("user_info");
    if (item) {
      const user_info = JSON.parse(item);
      dispatch(login_success(user_info));
    }

    dispatch(getProducts());
  }, [dispatch]);
  
  if(isAuthenticated){
    dispatch(getAddresses(user._id));
  }

  return (
    <>
      <Navbar />
      {isAuthenticated && user.role === "Admin" ? <Dashboard /> : ""}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<ProductMain />}></Route>
        {isAuthenticated && user.role === "Admin" && (
          <Route path="/dashboard/:userId" element={<Datagrid />}></Route>
        )}
       {isAuthenticated && <Route exact path = "/cart" element={<Cart/>}></Route>}
       {isAuthenticated && <Route exact path = "/address" element={<Address/>}></Route>}
      </Routes>
    </>
  );
};

export default App;
