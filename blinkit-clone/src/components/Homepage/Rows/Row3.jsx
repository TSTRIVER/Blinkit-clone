import React from "react";
import "../rows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Row3 = () => {
  const content = [
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/1204071_8-doritos-nacho-chips-nacho-cheese-flavour.jpg",
      name: "Doritos Nachos",
      quant: "153g X 2",
      price: "₹180",
    },
    {
      image: "https://m.media-amazon.com/images/I/61+GgCeFMHL._SX522_.jpg",
      name: "Pringles Can",
      quant: "107g",
      price: "₹110",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40083744_6-britannia-good-day-cashew-cookies.jpg",
      name: "Good Day Pack",
      quant: "600g",
      price: "₹150",
    },
    {
      image:
        "https://www.jiomart.com/images/product/original/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-product-images-o491373488-p491373488-0-202209281320.jpg",
      name: "Nutrichoice",
      quant: "1kg",
      price: "₹180",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/263125_2-haldirams-namkeen-khatta-meetha.jpg",
      name: "Khatta-Meetha",
      quant: "200g",
      price: "₹175",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40131386_4-yoga-bar-breakfast-protein-bar-apricot-fig.jpg",
      name: "Yoga Bar",
      quant: "50g",
      price: "₹50",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/271523-2_10-cadbury-bournville-rich-cocoa.jpg",
      name: "Bournville Cocoa",
      quant: "35g",
      price: "₹50",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/40078996_6-kurkure-puffcorn-yummy-cheese.jpg",
      name: "Kurkure Puffcorn",
      quant: "15g",
      price: "₹5",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/259977-2_12-britannia-gobbles-fruity-fun-cake.jpg",
      name: "Britannia Gobbles",
      quant: "50gm",
      price: "₹15",
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

export default Row3;
