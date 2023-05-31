import React from "react";

const M2 = () => {
  const breadArray = [
    {
      name: "Britannia",
      quantity: "400g",
      price: "₹30",
    },
    {
      name: "Modern",
      quantity: "400g",
      price: "₹35",
    },
    {
      name: "Harvest Gold",
      quantity: "400g",
      price: "₹40",
    },
    {
      name: "Bonnie",
      quantity: "400g",
      price: "₹38",
    },
    {
      name: "Pillsbury",
      quantity: "400g",
      price: "₹36",
    },
    {
      name: "Nature's Own",
      quantity: "400g",
      price: "₹42",
    },
    {
      name: "Sunfeast",
      quantity: "400g",
      price: "₹33",
    },
    {
      name: "Cremica",
      quantity: "400g",
      price: "₹39",
    },
    {
      name: "Wonder",
      quantity: "400g",
      price: "₹32",
    },
    {
      name: "Harveys",
      quantity: "400g",
      price: "₹37",
    },
    {
      name: "BakeSmith",
      quantity: "400g",
      price: "₹34",
    },
    {
      name: "Monginis",
      quantity: "400g",
      price: "₹41",
    },
  ];

  return (
    <>
      {breadArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/xxl/40162924_4-britannia-100-whole-wheat-bread.jpg" />
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

export default M2;
