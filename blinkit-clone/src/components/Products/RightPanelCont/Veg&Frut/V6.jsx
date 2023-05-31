import React from "react";

const V5 = () => {
  const fruitArray = [
    {
      name: "Apple",
      quantity: "500g",
      price: "₹60",
    },
    {
      name: "Banana",
      quantity: "6 pieces",
      price: "₹25",
    },
    {
      name: "Orange",
      quantity: "4 pieces",
      price: "₹40",
    },
    {
      name: "Strawberry",
      quantity: "250g",
      price: "₹80",
    },
    {
      name: "Mango",
      quantity: "2 pieces",
      price: "₹100",
    },
    {
      name: "Grapes",
      quantity: "500g",
      price: "₹70",
    },
    {
      name: "Watermelon",
      quantity: "1 piece",
      price: "₹50",
    },
    {
      name: "Pineapple",
      quantity: "1 piece",
      price: "₹60",
    },
    {
      name: "Kiwi",
      quantity: "4 pieces",
      price: "₹90",
    },
    {
      name: "Papaya",
      quantity: "1 piece",
      price: "₹45",
    },
    {
      name: "Blueberry",
      quantity: "200g",
      price: "₹120",
    },
    {
      name: "Pomegranate",
      quantity: "2 pieces",
      price: "₹70",
    },
  ];

  return (
    <>
      {seasonals.map((ele) => (
        <div className="products">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSPi0GcVs3lfz111sdnsNno_oocSCfqUQ-w&usqp=CAU" />
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

export default V5;
