import React from "react";

const E2 = () => {
    const soapArray = [
        {
          name: "Surf Excel",
          quantity: "1kg",
          price: "₹150"
        },
        {
          name: "Rin",
          quantity: "1kg",
          price: "₹140"
        },
        {
          name: "Tide",
          quantity: "1kg",
          price: "₹160"
        },
        {
          name: "Ariel",
          quantity: "1kg",
          price: "₹170"
        },
        {
          name: "Wheel",
          quantity: "1kg",
          price: "₹120"
        },
        {
          name: "Ghari",
          quantity: "1kg",
          price: "₹110"
        },
        {
          name: "Dettol",
          quantity: "75g",
          price: "₹40"
        },
        {
          name: "Lifebuoy",
          quantity: "100g",
          price: "₹25"
        },
        {
          name: "Lux",
          quantity: "75g",
          price: "₹35"
        },
        {
          name: "Pears",
          quantity: "75g",
          price: "₹30"
        },
        {
          name: "Santoor",
          quantity: "75g",
          price: "₹35"
        },
        {
          name: "Cinthol",
          quantity: "75g",
          price: "₹30"
        }
      ];
      

  return (
    <>
      {soapArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/l/1208598_2-godrej-ezee-detergent-liquid-1-kg-bathing-soap-lime-aloe-vera-150g-buy3-get-1free.jpg" />
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

export default E2;
