import React from "react";

const C2 = () => {
  const mccainArray = [
    {
      name: "McCain French Fries",
      quantity: "400g",
      price: "₹80",
    },
    {
      name: "McCain Smiles",
      quantity: "300g",
      price: "₹60",
    },
    {
      name: "McCain Aloo Tikki",
      quantity: "400g",
      price: "₹70",
    },
    {
      name: "McCain Veggie Nuggs",
      quantity: "350g",
      price: "₹90",
    },
    {
      name: "McCain Potato Shotz",
      quantity: "300g",
      price: "₹85",
    },
    {
      name: "McCain Potato Bites",
      quantity: "400g",
      price: "₹95",
    },
    {
      name: "McCain Sweet Fries",
      quantity: "350g",
      price: "₹90",
    },
    {
      name: "McCain Masala Fries",
      quantity: "400g",
      price: "₹80",
    },
    {
      name: "McCain Veggie Fingers",
      quantity: "350g",
      price: "₹75",
    },
    {
      name: "McCain Jalapeno Nuggs",
      quantity: "350g",
      price: "₹95",
    },
    {
      name: "McCain Super Wedges",
      quantity: "450g",
      price: "₹85",
    },
    {
      name: "McCain Pizza Pocket",
      quantity: "400g",
      price: "₹100",
    },
  ];

  return (
    <>
      {mccainArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/xxl/30000369_6-mccain-french-fries.jpg" />
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

export default C2;
