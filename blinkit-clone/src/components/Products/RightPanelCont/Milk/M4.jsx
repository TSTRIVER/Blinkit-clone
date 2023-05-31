import React from "react";

const M4 = () => {
  const paneerArray = [
    {
      name: "Amul",
      quantity: "200g",
      price: "₹60",
    },
    {
      name: "Mother Dairy",
      quantity: "200g",
      price: "₹55",
    },
    {
      name: "Nanak",
      quantity: "200g",
      price: "₹70",
    },
    {
      name: "Gowardhan",
      quantity: "200g",
      price: "₹65",
    },
    {
      name: "Milky Mist",
      quantity: "200g",
      price: "₹75",
    },
    {
      name: "Britannia",
      quantity: "200g",
      price: "₹80",
    },
    {
      name: "Vitasoy",
      quantity: "200g",
      price: "₹90",
    },
    {
      name: "Tofutti",
      quantity: "200g",
      price: "₹85",
    },
    {
      name: "Vezlay",
      quantity: "200g",
      price: "₹95",
    },
    {
      name: "Nutrela",
      quantity: "200g",
      price: "₹75",
    },
    {
      name: "Soyfit",
      quantity: "200g",
      price: "₹80",
    },
    {
      name: "Fresh to Home",
      quantity: "200g",
      price: "₹90",
    },
  ];

  return (
    <>
      {paneerArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/xxl/40096747-2_8-amul-malai-fresh-paneer.jpg" />
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

export default M4;
