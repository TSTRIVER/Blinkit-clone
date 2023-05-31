import React from "react";
import { NavLink } from "react-router-dom";
import "../rows.css";
const Row1b = () => {
  let cont_arr = [
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/40078996_6-kurkure-puffcorn-yummy-cheese.jpg",
      name: "Chips & Biscuits",
    },
    {
      image:
        "https://frugivore-storage.s3.amazonaws.com/media/package/img_one/2019-08-30/Britannai_Whole_Wheat_Bread.jpg",
      name: "Breads & Bakery",
    },
    {
      image:
        "https://www.jiomart.com/images/product/original/490983569/mother-dairy-classic-dahi-400-g-cup-product-images-o490983569-p590041365-0-202203141904.jpg",
      name: "Milk & Milk Products",
    },
    {
      image: "https://m.media-amazon.com/images/I/51bBSMVqT7L._SL1500_.jpg",
      name: "Shampoos & Soaps",
    },
    {
      image: "https://m.media-amazon.com/images/I/61-0PgPQ4sL._SL1001_.jpg",
      name: "Detergents & Bars",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/271523-2_10-cadbury-bournville-rich-cocoa.jpg",
      name: "Chocolates & Creams",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/251019_8-fanta-soft-drink-orange-flavoured.jpg",
      name: "Drinks & Juices",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40033819-2_6-fresho-apple-shimla.jpg",
      name: "Veges & Fruits",
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/l/40005022_4-amul-kool-kesar.jpg",
      name: "Milkshake & Icecreams",
    },
  ];

  return (
    <>
      <div id="category">
        {cont_arr.map((ele) => {
          return (
            <>
              <NavLink className="grid-cont linker" to="/products">
                <img src={ele.image} />
                <h6 className="h6style">{ele.name}</h6>
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Row1b;
