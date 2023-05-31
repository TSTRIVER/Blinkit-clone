import React from "react";

const Fresh = () => {
  const fresh_veges = [
    {
      name: "Carrot",
      quantity: "250g",
      price: "₹30",
    },
    {
      name: "Tomato",
      quantity: "500g",
      price: "₹40",
    },
    {
      name: "Cabbage",
      quantity: "1kg",
      price: "₹35",
    },
    {
      name: "Broccoli",
      quantity: "200g",
      price: "₹50",
    },
    {
      name: "Spinach",
      quantity: "500g",
      price: "₹25",
    },
    {
      name: "Capsicum",
      quantity: "300g",
      price: "₹45",
    },
    {
      name: "Cauliflower",
      quantity: "800g",
      price: "₹55",
    },
    {
      name: "Lettuce",
      quantity: "150g",
      price: "₹30",
    },
    {
      name: "Radish",
      quantity: "400g",
      price: "₹20",
    },
    {
      name: "Onion",
      quantity: "1kg",
      price: "₹40",
    },
    {
      name: "Bell Pepper",
      quantity: "250g",
      price: "₹35",
    },
    {
      name: "Beetroot",
      quantity: "600g",
      price: "₹30",
    },
  ];

  return (
    <>
      {fresh_veges.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/l/40005882_9-fresho-veg-biriyani-pack.jpg" />
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

export default Fresh;
