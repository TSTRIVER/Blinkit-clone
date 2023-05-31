import React from "react";

const D2 = () => {
    const shakeArray = [
        {
          name: "Vanilla Milkshake",
          quantity: "250ml",
          price: "₹60"
        },
        {
          name: "Chocolate Milkshake",
          quantity: "250ml",
          price: "₹70"
        },
        {
          name: "Strawberry Milkshake",
          quantity: "250ml",
          price: "₹80"
        },
        {
          name: "Mango Milkshake",
          quantity: "250ml",
          price: "₹75"
        },
        {
          name: "Banana Milkshake",
          quantity: "250ml",
          price: "₹65"
        },
        {
          name: "Coffee Milkshake",
          quantity: "250ml",
          price: "₹85"
        },
        {
          name: "Butterscotch Milkshake",
          quantity: "250ml",
          price: "₹90"
        },
        {
          name: "Pista Milkshake",
          quantity: "250ml",
          price: "₹80"
        },
        {
          name: "Caramel Milkshake",
          quantity: "250ml",
          price: "₹85"
        },
        {
          name: "Almond Milkshake",
          quantity: "250ml",
          price: "₹95"
        },
        {
          name: "Oreo Milkshake",
          quantity: "250ml",
          price: "₹90"
        },
        {
          name: "Hazelnut Milkshake",
          quantity: "250ml",
          price: "₹100"
        }
      ];      
      
  return (
    <>
      {shakeArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/xxl/1207041-2_3-cavins-milkshake-chocolate.jpg" />
          <p className="pstyle">Time</p>
          <h3 className="h3style">{ele.name}</h3>
          <p className="pstyle">{ele.quantity}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.6vw",
              width: "100%",
              height: "10%",
            }}
          >
            <p className="pstyle">{ele.price}</p>
            <button id="btn">Add</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default D2;
