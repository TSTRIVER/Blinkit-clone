import React from "react";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const cards = [
    { bg: "https://img.ws.mms.shopee.com.br/ff3ca6b27452120ca0a149423cdb02bd" , head: "Pet Foods"},
    { bg: "https://beautyincolor.blog/wp-content/uploads/2022/08/IMG_0685-1440x1920.jpg" , head: "Beautify Your Summer"},
    { bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKKLVuu442arYR18zBjKD6hjgKaAv1KDkQyUiIGoEm1ULKPoEsJ4p94FnVeBJNFToyNA&usqp=CAU" , head: "Grab That I-Apple"},
    { bg: "https://foodsafetyhelpline.com/wp-content/uploads/2019/07/Guidance-Note-on-Food-for-Special-Dietary-Use-for-Sports-Person-1-1024x683.jpg" , head:"Sports Supps."},
    { bg: "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue322/fragrances_OI.jpg" , head:"What's That Smell?"},
    { bg: "https://s3.envato.com/files/334814673/close-up%20view%20of%20vegetables%20as%20lettuce%20carrot%20tomato%20and%20spinach%20on%20right%20side%20and%20white%20background%20with%20copy%20space.jpg" , head:"Fresh Veggies"}

  ];

  return (
    <>
      {cards.map(ele=>
                 <div
            className="scroll-cards mle"
            style={{
              backgroundImage: `url(${ele.bg})`,
              backgroundSize: "cover",
            }}
          >
            <h1>{ele.head}</h1>
            <button><NavLink to="/products" className="linker">Order Now</NavLink></button>
          </div>
            )}
    </>
  );
};

export default Cards;
