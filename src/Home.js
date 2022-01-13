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
          image="http://authors.appadvice.com/wp-content/appadvice-v2-media/2017/07/maxresdefault_91d2a4db6926e3522f44b444bd9ad967.jpg"
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
          image="https://m.media-amazon.com/images/I/81dK-jhi0cL._SL1500_.jpg"
        />
        <Product
          id="4"
          title="(Renewed) Zebronics Peace Wireless Earphone (Black)"
          price="300"
          rating={3}
          image="https://m.media-amazon.com/images/I/81czIlNvhrL._SL1500_.jpg"
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
          title="Alexa Earbuds & Frames (Super smart|| AI Powered || Black Set)"
          price="9000"
          rating={5}
          image="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
