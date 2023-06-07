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
import { login_success, fetchUsers } from "./Store/user_slice";
import { getProducts } from "./Store/product_slice";
import Address from "./components/Address/Address";
import ToPay from "./components/Address/ToPay";
import Success from "./components/Payment/Success";
import { getAddresses } from "./Store/address_slice";
import Orders from "./components/Orders/Orders";
import YourOrders from "./components/Orders/YourOrders";
import { fetchOrders } from "./Store/orders_slice";
import ManageUser from "./components/Dashboard/ManageUser";
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
  }, [dispatch, isAuthenticated, user._id, user.role]);

  useEffect(() => {
    if (isAuthenticated && user.role === "User") {
      dispatch(getAddresses(user._id));
      dispatch(fetchOrders(user._id));
    }
  }, [isAuthenticated, dispatch, user._id]);

  useEffect(() => {
    if (isAuthenticated && user.role === "Admin") {
      dispatch(fetchUsers());
    }
  }, [isAuthenticated, user.role, dispatch]);

  return (
    <>
      <Navbar />
      {isAuthenticated && user.role === "Admin" ? <Dashboard /> : ""}
      {isAuthenticated && user.role === "User" ? <Orders /> : ""}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<ProductMain />}></Route>

        {isAuthenticated && user.role === "Admin" && (
          <Route path="/dashboard/:userId" element={<Datagrid />}></Route>
        )}

        {isAuthenticated && user.role === "Admin" && (
          <Route path="/dashboard/users/:id" element={<ManageUser />}></Route>
        )}

        {isAuthenticated && (
          <Route exact path="/cart" element={<Cart />}></Route>
        )}
        {isAuthenticated && (
          <Route exact path="/address" element={<Address />}></Route>
        )}
        {isAuthenticated && (
          <Route exact path="/proceedToPay" element={<ToPay />}></Route>
        )}
        {isAuthenticated && (
          <Route path="/orders/:name/:id" element={<YourOrders />}></Route>
        )}

        <Route path="/paymentSuccess" element={<Success />}></Route>
      </Routes>
    </>
  );
};

export default App;
