import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazon Banner"
      />
      <div className="home__row">
        <Product
          id="1"
          title="Amazon Echo Dot Speaker (Voicebot|Black-Pro7)"
          price="4999"
          rating={4}
          image="https://m.media-amazon.com/images/I/61-DjUz7JxL.jpg"
        />
        <Product
          id="2"
          title="
        
        Lustree Back Cover for Samsung Galaxy A70s (Silicone|Transparent)"
          price="899"
          rating={4}
          image="https://m.media-amazon.com/images/I/61g5fY-kN6L._SL1080_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Symactive Gym Training Gloves, Set of 2, Medium, Ace, Green"
          price="699"
          rating={2}
          image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/041465/01/fnd/IND/fmt/png/Training-Essential-Unisex-Fingered-Gloves"
        />
        <Product
          id="4"
          title="(Renewed) Zebronics Peace Wireless Earphone (Black)"
          price="399"
          rating={3}
          image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3b27aa2a-68ce-47db-a975-ffd5543393b6_540x.png?v=1625046357"
        />
        <Product
          id="5"
          title="Amazon Hot Selling Global Version Xiaomi Phone Mix3 Original 6+128g Xiaomi Mi Mix 3 Wholesale From China - Buy Mix 3"
          price="13100"
          rating={4}
          image="https://sc04.alicdn.com/kf/Hd35f4000487146d5a326f469f58cc2bbr.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Redmi 80 cm (32 inches) HD Ready Smart LED TV | L32M6-RA (Black) (2021 Model) | With Android 11"
          price="9000"
          rating={5}
          image="https://m.media-amazon.com/images/I/71huHaBFhNL._SY450_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
