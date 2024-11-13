import React from 'react';
import "../styling/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Concha Corner</h1>
      
      <div className="about-intro">
        <div className="contact-image">
          <img src={`${process.env.PUBLIC_URL}/people.jpg`} alt="family" />
        </div>
        Welcome to Concha Corner, where the warmth of tradition meets the taste of home. We bring authentic Mexican flavors to every bite, with freshly baked pastries, breads, and sweets made with love. Whether you're here for a classic concha, a sweet empanada, or a savory bolillo, we invite you to experience the joy of Mexican baking right here in our cozy corner. Bienvenidos!
      </div>
      
      <div className="about-section">
        <h2 className="section-heading">Our Beginnings</h2>
        <div className="contact-image">
          <img src={`${process.env.PUBLIC_URL}/corner.jpg`} alt="Bakery" />
          <img src={`${process.env.PUBLIC_URL}/bakery.jpg`} alt="Bakery" />
        </div>
        <p>Pan Dulce Bakery was founded in 1998 by the Rodriguez family, who brought their cherished family recipes and passion for traditional Mexican baking from a small village in Jalisco, Mexico, to the heart of our community. It all began with a simple dream: to share the rich flavors and cultural heritage of Mexico with friends and neighbors. Over the years, our bakery has become a beloved gathering place, where the aroma of freshly baked pan dulce fills the air, and customers come not just for the sweets, but for the sense of home and connection.</p>
      </div>
      
      <div className="about-section">
        <h2 className="section-heading">Our Promise</h2>
        <p>Today, Pan Dulce Bakery continues to be a family-run business, staying true to our roots while embracing new traditions. We use only the finest ingredients, baking daily to ensure each item is fresh and flavorful. From our humble beginnings to becoming a local favorite, our commitment remains the same: to bring a little piece of Mexico to every table.</p>
        <div className="contact-image">
          <img src={`${process.env.PUBLIC_URL}/family.jpg`} alt="Bakery" />
        </div>
      </div>
    </div>
  );
};

export default About;
