import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={3000}
        className="about-carousel"
      >
        <div>
          <img
            src="\src\assets\food_facebook_cover_31.jpg"
            alt="Delicious Food"
          />
        </div>
        <div>
          <img
            src="\src\assets\food_web_banner_36.jpg"
            alt="Professional Chef"
          />
        </div>
        <div>
          <img
            src="\src\assets\Food-Facebook-Cover-Banner-19.jpg"
            alt="Restaurant Ambience"
          />
        </div>
      </Carousel>

      {/* About Content */}
      <div className="about-content">
        <h1 className="about-title">
          About <span>Chef Food</span> 🍽️
        </h1>
        <p className="about-text">
          Welcome to <strong>Chef Food</strong> – your ultimate destination for
          delicious meals delivered with passion and precision. Whether you're
          craving mouth-watering biryanis, crispy burgers, or gourmet
          continental dishes, we've got something that will tickle every taste
          bud.
        </p>
        <p className="about-text">
          At Chef Food, we believe that food is not just a necessity – it's an
          experience. That's why we partner with the best chefs and local
          kitchens to bring you hand-crafted meals made with fresh ingredients
          and a whole lot of love.
        </p>
        <p className="about-text">
          Our mission is simple – to make high-quality food accessible, fast,
          and unforgettable. Whether you're dining solo, with friends, or
          hosting a party, we're here to serve flavor on your table.
        </p>
      </div>

      {/* About Images */}
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Chef cooking"
          className="about-img-left"
        />
        <img
          src="src/assets/person-looking-up-recipes-in-the-kitchen.svg"
          alt="Person cooking"
          className="about-img-right"
        />
      </div>
    </div>
  );
};

export default About;
