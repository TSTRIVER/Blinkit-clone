import React from "react";

const V5 = () => {
  const vegetableArray = [
    {
      name: "Spinach",
      quantity: "500g",
      price: "₹40",
    },
    {
      name: "Kale",
      quantity: "300g",
      price: "₹35",
    },
    {
      name: "Lettuce",
      quantity: "200g",
      price: "₹30",
    },
    {
      name: "Swiss Chard",
      quantity: "400g",
      price: "₹45",
    },
    {
      name: "Arugula",
      quantity: "500g",
      price: "₹50",
    },
    {
      name: "Collard Greens",
      quantity: "300g",
      price: "₹40",
    },
    {
      name: "Watercress",
      quantity: "250g",
      price: "₹35",
    },
    {
      name: "Mustard Greens",
      quantity: "150g",
      price: "₹25",
    },
    {
      name: "Bok Choy",
      quantity: "300g",
      price: "₹30",
    },
    {
      name: "Cabbage Lettuce",
      quantity: "250g",
      price: "₹35",
    },
    {
      name: "Malabar Spinach",
      quantity: "200g",
      price: "₹40",
    },
    {
      name: "Sorrel",
      quantity: "800g",
      price: "₹60",
    },
  ];

  return (
    <>
      {seasonals.map((ele) => (
        <div className="products">
          <img src="https://cdn.shopify.com/s/files/1/0104/1059/0266/products/spnach_large_01cac1a1-246f-433c-b02b-e2c7986fe95c.jpg?v=1569550040" />
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
