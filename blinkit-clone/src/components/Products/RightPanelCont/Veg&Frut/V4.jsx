import React from "react";

const V4 = () => {
  const vegetableArray = [
    {
      name: "Artichoke",
      quantity: "500g",
      price: "₹80",
    },
    {
      name: "Asparagus",
      quantity: "300g",
      price: "₹90",
    },
    {
      name: "Fiddleheads",
      quantity: "200g",
      price: "₹70",
    },
    {
      name: "Kohlrabi",
      quantity: "400g",
      price: "₹60",
    },
    {
      name: "Radicchio",
      quantity: "500g",
      price: "₹75",
    },
    {
      name: "Romanesco",
      quantity: "300g",
      price: "₹85",
    },
    {
      name: "Jicama",
      quantity: "500g",
      price: "₹65",
    },
    {
      name: "Watercress",
      quantity: "250g",
      price: "₹70",
    },
    {
      name: "Fennel",
      quantity: "150g",
      price: "₹55",
    },
    {
      name: "Purple Yam",
      quantity: "300g",
      price: "₹90",
    },
    {
      name: "Dragon Fruit",
      quantity: "250g",
      price: "₹120",
    },
    {
      name: "Chayote",
      quantity: "800g",
      price: "₹80",
    },
  ];

  return (
    <>
      {seasonals.map((ele) => (
        <div className="products">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdx_z-Z75oUwRayivW-hvQm8rP-ChSno9bqmJuBuCIPIb910ffY_OvhP-f4zwUNp-VuE&usqp=CAU" />
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

export default V4;
