import React from "react";

const V7 = () => {
  const mangoArray = [
    {
      name: "Alphonso",
      quantity: "1 dozen",
      price: "₹500",
    },
    {
      name: "Kesar",
      quantity: "1 dozen",
      price: "₹450",
    },
    {
      name: "Totapuri",
      quantity: "1 dozen",
      price: "₹400",
    },
    {
      name: "Langra",
      quantity: "1 dozen",
      price: "₹350",
    },
    {
      name: "Dasheri",
      quantity: "1 dozen",
      price: "₹400",
    },
    {
      name: "Badami",
      quantity: "1 dozen",
      price: "₹450",
    },
    {
      name: "Neelam",
      quantity: "1 dozen",
      price: "₹400",
    },
    {
      name: "Himsagar",
      quantity: "1 dozen",
      price: "₹500",
    },
    {
      name: "Safeda",
      quantity: "1 dozen",
      price: "₹350",
    },
    {
      name: "Malgova",
      quantity: "1 dozen",
      price: "₹500",
    },
    {
      name: "Banganapalli",
      quantity: "1 dozen",
      price: "₹400",
    },
    {
      name: "Rajapuri",
      quantity: "1 dozen",
      price: "₹450",
    },
  ];

  return (
    <>
      {seasonals.map((ele) => (
        <div className="products">
          <img src="https://assets.thehansindia.com/h-upload/2022/05/04/1290262-mango.webp" />
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

export default V7;
