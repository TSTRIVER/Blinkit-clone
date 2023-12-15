import React from "react";
import "../rows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Row5 = () => {
  const content = [
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40033819-2_6-fresho-apple-shimla.jpg",
      name: "Fresh Shimla Apples",
      quant: "1kg (8-10pc.)",
      price: "₹153",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/40123768_1-fresho-guava-pink.jpg",
      name: "Fresh Pink Guava",
      quant: "1kg",
      price: "₹150",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/40130385_3-fresho-tomato-local-organically-grown.jpg",
      name: "Organic Tomatoes",
      quant: "1kg",
      price: "₹40",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/10000024-2_2-fresho-baby-potato.jpg",
      name: "Baby Potatoes",
      quant: "500g",
      price: "₹15",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/10000263-2_8-fresho-strawberry.jpg",
      name: "Fresho Strawberries",
      quant: "200g",
      price: "₹50",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/m/10000117-2_3-fresho-ginger.jpg",
      name: "Fresho Ginger",
      quant: "100g",
      price: "₹30",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/10000156_21-fresho-pineapple.jpg",
      name: "Fresho Pineapple",
      quant: "800g-1kg (1pc)",
      price: "₹80",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40200233_1-fresho-cabbage.jpg",
      name: "Cabbage (1pc)",
      quant: "500g",
      price: "₹20",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/10000063-2_2-fresho-broccoli.jpg",
      name: "Fresho Broccoli",
      quant: "500g (1pc)",
      price: "₹80",
    },
  ];

  return (
    <>
      {content.map((cont) => (
        <div className="products">
          <img src={cont.image} />
          <p className="pstyle">
            <FontAwesomeIcon
              icon={faClock}
              style={{ fontSize: "1vw", color: "green" }}
            />
          </p>
          <h3 className="h3style">{cont.name}</h3>
          <p className="pstyle">{cont.quant}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.6vw",
              width: "100%",
              height: "10%",
            }}
          >
            <p className="pstyle">{cont.price}</p>
            <button id="btn">Add</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Row5;
