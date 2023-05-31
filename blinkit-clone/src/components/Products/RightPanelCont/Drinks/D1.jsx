import React from "react";

const D1 = () => {
    const coldArray = [
        {
          name: "Coca-Cola",
          quantity: "500ml",
          price: "₹35"
        },
        {
          name: "Pepsi",
          quantity: "500ml",
          price: "₹30"
        },
        {
          name: "Thums Up",
          quantity: "500ml",
          price: "₹40"
        },
        {
          name: "Sprite",
          quantity: "500ml",
          price: "₹35"
        },
        {
          name: "Fanta",
          quantity: "500ml",
          price: "₹35"
        },
        {
          name: "Mirinda",
          quantity: "500ml",
          price: "₹30"
        },
        {
          name: "Mountain Dew",
          quantity: "500ml",
          price: "₹40"
        },
        {
          name: "Limca",
          quantity: "500ml",
          price: "₹35"
        },
        {
          name: "7 Up",
          quantity: "500ml",
          price: "₹35"
        },
        {
          name: "Maaza",
          quantity: "500ml",
          price: "₹40"
        },
        {
          name: "Slice",
          quantity: "500ml",
          price: "₹35"
        },
        {
          name: "Appy Fizz",
          quantity: "500ml",
          price: "₹40"
        }
      ];
      
  return (
    <>
      {coldArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/xxl/40094180-9_3-mirinda-soft-drink.jpg" />
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

export default D1;
