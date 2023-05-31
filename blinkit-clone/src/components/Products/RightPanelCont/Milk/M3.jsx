import React from "react";

const M3 = () => {
  const cerealArray = [
    {
      name: "Kellogg's",
      quantity: "500g",
      price: "₹150",
    },
    {
      name: "Quaker",
      quantity: "500g",
      price: "₹120",
    },
    {
      name: "Saffola",
      quantity: "500g",
      price: "₹130",
    },
    {
      name: "Bagrry's",
      quantity: "500g",
      price: "₹140",
    },
    {
      name: "MTR",
      quantity: "500g",
      price: "₹110",
    },
    {
      name: "Nestlé",
      quantity: "500g",
      price: "₹125",
    },
    {
      name: "Soulfull",
      quantity: "500g",
      price: "₹135",
    },
    {
      name: "Tata Sampann",
      quantity: "500g",
      price: "₹115",
    },
    {
      name: "Kwality",
      quantity: "500g",
      price: "₹130",
    },
    {
      name: "24 Mantra",
      quantity: "500g",
      price: "₹140",
    },
    {
      name: "True Elements",
      quantity: "500g",
      price: "₹145",
    },
    {
      name: "Freedom",
      quantity: "500g",
      price: "₹125",
    },
  ];

  return (
    <>
      {cerealArray.map((ele) => (
        <div className="products">
          <img src="https://m.media-amazon.com/images/I/51LAFpud3NL.jpg" />
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

export default M3;
