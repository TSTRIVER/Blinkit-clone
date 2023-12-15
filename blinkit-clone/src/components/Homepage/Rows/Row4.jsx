import React from "react";
import "../rows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Row4 = () => {
  const content = [
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40195155_2-mountain-dew-soft-drink.jpg",
      name: "Mountain Dew",
      quant: "750ml",
      price: "₹60",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40113908_5-sting-energy-drink.jpg",
      name: "Sting Energy Drink",
      quant: "250ml",
      price: "₹35",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/30007713_8-cavins-milkshake-strawberry.jpg",
      name: "Cavin's Milkshake",
      quant: "200ml",
      price: "₹25",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/251019_8-fanta-soft-drink-orange-flavoured.jpg",
      name: "Fanta PET Bottle",
      quant: "750ml",
      price: "₹40",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/40211835_3-sunfeast-chocolate-shake-with-real-belgian-chocolate.jpg",
      name: "Dark Fantasy Shake",
      quant: "180ml",
      price: "₹40",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/40211194_1-b-fizz-drink.jpg",
      name: "Fizz Mini",
      quant: "100ml",
      price: "₹20",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/412400_8-paper-boat-aamras-mango-fruit-juice.jpg",
      name: "Paper Boat Juice",
      quant: "200ml",
      price: "₹32",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/40005022_4-amul-kool-kesar.jpg",
      name: "Amul Cool Flavored",
      quant: "180ml",
      price: "₹25",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40058827_2-jeeru-masala-jeera.jpg",
      name: "Jeeru Masala",
      quant: "1L",
      price: "₹60",
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

export default Row4;
