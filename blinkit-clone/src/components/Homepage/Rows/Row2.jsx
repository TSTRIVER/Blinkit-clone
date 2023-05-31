import React from 'react'
import "../rows.css"

const Row2 = () => {

    const content = [
        {
          image:
            "https://m.media-amazon.com/images/I/51bBSMVqT7L._SL1500_.jpg",
          name: "Pantene (Bamboo)",
          quant: "180ml",
          price: "₹90",
        },
        {
          image:
            "https://m.media-amazon.com/images/I/61R3euAC06L._SX569_.jpg",
          name: "Rin Budget Pack",
          quant: "7kg",
          price: "₹400",
        },
        {
          image: "https://m.media-amazon.com/images/I/61-0PgPQ4sL._SL1001_.jpg",
          name: "Dettol (3 + 1 free)",
          quant: "75g X 4",
          price: "₹130",
        },
        {
          image:
            "https://www.jiomart.com/images/product/600x600/490958423/tide-detergent-bar-200-g-pack-of-5-product-images-o490958423-p490958423-0-202203170920.jpg",
          name: "Tide Bar Value Pack",
          quant: "80g X 5",
          price: "₹111",
        },
        {
          image:
            "https://m.media-amazon.com/images/I/41v6sB4Xb2L._SL1000_.jpg",
          name: "Dove Conditioner",
          quant: "190ml",
          price: "₹280",
        },
        {
          image:
            "https://www.bigbasket.com/media/uploads/p/xxl/266969_9-vim-dishwash-bar-lemon.jpg",
          name: "Vim Dishwash Bar",
          quant: "200g X 3",
          price: "₹60",
        },
        {
          image:
            "https://m.media-amazon.com/images/I/51RWDqj8u-L._SL1000_.jpg",
          name: "Harpic 10X",
          quant: "500ml",
          price: "₹88",
        },
        {
          image: "https://www.bigbasket.com/media/uploads/p/xxl/30009474_7-odonil-toilet-air-freshener-lavender.jpg",
          name: "Odonil Freshener",
          quant: "50g",
          price: "₹40",
        },
        {
          image: "https://cdn01.pharmeasy.in/dam/products_otc/G29378/nivea-men-oil-control-facewash-100g-2-1679372278.jpg",
          name: "Nivea Oil Control",
          quant: "100g",
          price: "₹270",
        },
      ];

      return (
        <>{content.map((cont) => (
          <div className="products">
            <img src={cont.image} />
            <p className="pstyle">Time</p>
            <h3 className="h3style">
              {cont.name}
            </h3>
            <p className="pstyle" >{cont.quant}</p>
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
}

export default Row2