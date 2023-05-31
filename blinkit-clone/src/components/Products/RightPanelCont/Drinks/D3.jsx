import React from "react";

const D3 = () => {
  const juiceArray = [
    {
      name: "Real",
      quantity: "1L",
      price: "₹100",
    },
    {
      name: "Tropicana",
      quantity: "1L",
      price: "₹120",
    },
    {
      name: "Minute Maid",
      quantity: "1L",
      price: "₹110",
    },
    {
      name: "Paper Boat",
      quantity: "1L",
      price: "₹90",
    },
    {
      name: "B Natural",
      quantity: "1L",
      price: "₹95",
    },
    {
      name: "Raw Pressery",
      quantity: "500ml",
      price: "₹80",
    },
    {
      name: "Frooti",
      quantity: "1L",
      price: "₹85",
    },
    {
      name: "Maaza",
      quantity: "1L",
      price: "₹95",
    },
    {
      name: "Pulpy Orange",
      quantity: "1L",
      price: "₹90",
    },
    {
      name: "Real Activ",
      quantity: "1L",
      price: "₹110",
    },
    {
      name: "Godrej Jumpin'",
      quantity: "1L",
      price: "₹80",
    },
    {
      name: "Ceres",
      quantity: "1L",
      price: "₹130",
    },
  ];

  return (
    <>
      {juiceArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/l/229922_5-real-fruit-power-juice-mixed.jpg" />
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

export default D3;
