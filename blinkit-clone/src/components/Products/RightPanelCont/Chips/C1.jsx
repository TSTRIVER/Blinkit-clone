import React from "react";

const C1 = () => {
  const chipsArray = [
    {
      name: "Lay's",
      quantity: "100g",
      price: "₹20",
    },
    {
      name: "Kurkure",
      quantity: "100g",
      price: "₹15",
    },
    {
      name: "Pringles",
      quantity: "110g",
      price: "₹50",
    },
    {
      name: "Bingo!",
      quantity: "100g",
      price: "₹18",
    },
    {
      name: "Haldiram's",
      quantity: "150g",
      price: "₹25",
    },
    {
      name: "Uncle Chipps",
      quantity: "90g",
      price: "₹12",
    },
    {
      name: "Terra",
      quantity: "110g",
      price: "₹45",
    },
    {
      name: "Balaji Wafers",
      quantity: "100g",
      price: "₹17",
    },
    {
      name: "Cornitos",
      quantity: "70g",
      price: "₹30",
    },
    {
      name: "Kettle Studio",
      quantity: "120g",
      price: "₹40",
    },
    {
      name: "Yellow Diamond",
      quantity: "100g",
      price: "₹16",
    },
    {
      name: "Tasty Treat",
      quantity: "80g",
      price: "₹14",
    },
  ];

  return (
    <>
      {chipsArray.map((ele) => (
        <div className="products">
          <img src="https://5.imimg.com/data5/UE/GO/MY-23501927/lays-chips-500x500.jpg" />
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

export default C1;
