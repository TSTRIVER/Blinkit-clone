import React from "react";

const C3 = () => {
    const snacksArray = [
        {
          name: "McCain Cheese Balls",
          quantity: "250g",
          price: "₹70"
        },
        {
          name: "Doritos Nacho Cheese",
          quantity: "150g",
          price: "₹50"
        },
        {
          name: "McCain French Fries",
          quantity: "400g",
          price: "₹80"
        },
        {
          name: "McCain Smiles",
          quantity: "300g",
          price: "₹60"
        },
        {
          name: "McCain Aloo Tikki",
          quantity: "400g",
          price: "₹70"
        },
        {
          name: "McCain Veggie Nuggets",
          quantity: "350g",
          price: "₹90"
        },
        {
          name: "McCain Potato Cheese Shotz",
          quantity: "300g",
          price: "₹85"
        },
        {
          name: "McCain Chilli Garlic Potato Bites",
          quantity: "400g",
          price: "₹95"
        },
        {
          name: "McCain Sweet Potato Fries",
          quantity: "350g",
          price: "₹90"
        },
        {
          name: "McCain Masala Fries",
          quantity: "400g",
          price: "₹80"
        },
        {
          name: "McCain Veggie Fingers",
          quantity: "350g",
          price: "₹75"
        },
        {
          name: "McCain Cheese & Jalapeno Nuggets",
          quantity: "350g",
          price: "₹95"
        }
    ]

  return (
    <>
      {snacksArray.map((ele) => (
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

export default C3;
