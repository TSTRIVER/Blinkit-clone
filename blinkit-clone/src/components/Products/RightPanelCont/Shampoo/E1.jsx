import React from "react";

const E1 = () => {
  const shampooArray = [
    {
      name: "Dove",
      quantity: "200ml",
      price: "₹150",
    },
    {
      name: "Pantene",
      quantity: "375ml",
      price: "₹200",
    },
    {
      name: "Head & Shoulders",
      quantity: "400ml",
      price: "₹180",
    },
    {
      name: "Garnier Fructis",
      quantity: "340ml",
      price: "₹170",
    },
    {
      name: "TRESemmé",
      quantity: "500ml",
      price: "₹250",
    },
    {
      name: "L'Oreal Paris",
      quantity: "360ml",
      price: "₹300",
    },
    {
      name: "Clinic Plus",
      quantity: "400ml",
      price: "₹150",
    },
    {
      name: "Sunsilk",
      quantity: "350ml",
      price: "₹160",
    },
    {
      name: "Dabur Vatika",
      quantity: "300ml",
      price: "₹140",
    },
    {
      name: "Nyle Naturals",
      quantity: "400ml",
      price: "₹130",
    },
    {
      name: "Fiama",
      quantity: "250ml",
      price: "₹170",
    },
    {
      name: "Herbal Essences",
      quantity: "400ml",
      price: "₹190",
    },
  ];

  return (
    <>
      {shampooArray.map((ele) => (
        <div className="products">
          <img src="https://m.media-amazon.com/images/I/61ZrPaeTcfL._SL1500_.jpg" />
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

export default E1;
