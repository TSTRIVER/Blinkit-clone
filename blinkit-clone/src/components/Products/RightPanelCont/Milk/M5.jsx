import React from "react";

const M5 = () => {
  const curdArray = [
    {
      name: "Amul",
      quantity: "500g",
      price: "₹30",
    },
    {
      name: "Mother Dairy",
      quantity: "500g",
      price: "₹35",
    },
    {
      name: "Nestlé",
      quantity: "500g",
      price: "₹40",
    },
    {
      name: "Danone",
      quantity: "500g",
      price: "₹45",
    },
    {
      name: "Epigamia",
      quantity: "400g",
      price: "₹50",
    },
    {
      name: "Param",
      quantity: "500g",
      price: "₹35",
    },
    {
      name: "Gowardhan",
      quantity: "500g",
      price: "₹40",
    },
    {
      name: "Vadilal",
      quantity: "500g",
      price: "₹45",
    },
    {
      name: "Nandini",
      quantity: "500g",
      price: "₹30",
    },
    {
      name: "Britannia",
      quantity: "500g",
      price: "₹35",
    },
    {
      name: "Chitale",
      quantity: "500g",
      price: "₹40",
    },
    {
      name: "Dahi",
      quantity: "500g",
      price: "₹45",
    },
  ];

  return (
    <>
      {curdArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/xxl/40046548_5-epigamia-greek-yogurt-strawberry.jpg" />
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

export default M5;
