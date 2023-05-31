import React from "react";

const Seasonal = () => {
  const seasonals = [
    {
      name: "Cucumber",
      quantity: "500g",
      price: "₹25",
    },
    {
      name: "Tomato",
      quantity: "300g",
      price: "₹40",
    },
    {
      name: "Capsicum",
      quantity: "200g",
      price: "₹30",
    },
    {
      name: "Zucchini",
      quantity: "400g",
      price: "₹35",
    },
    {
      name: "Eggplant",
      quantity: "500g",
      price: "₹40",
    },
    {
      name: "Okra",
      quantity: "300g",
      price: "₹30",
    },
    {
      name: "Corn",
      quantity: "4 ears",
      price: "₹50",
    },
    {
      name: "Bell Pepper",
      quantity: "250g",
      price: "₹35",
    },
    {
      name: "Lettuce",
      quantity: "150g",
      price: "₹20",
    },
    {
      name: "Green Bean",
      quantity: "300g",
      price: "₹25",
    },
    {
      name: "Radish",
      quantity: "250g",
      price: "₹20",
    },
    {
      name: "Cauliflower",
      quantity: "800g",
      price: "₹50",
    },
  ];

  return (
    <>
      {seasonals.map((ele) => (
        <div className="products">
          <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/zucchini-benefits-1296x728-feature.jpg?w=1155&h=1528" />
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

export default Seasonal;
