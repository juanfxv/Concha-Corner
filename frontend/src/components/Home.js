import React, { useEffect, useState } from 'react';
import "../styling/Home.css"; // Ensure to create this CSS file
// import axios from 'axios';

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Concha Corner</h1>
            <div className="home-section">
                Welcome to Concha Corner, where the warmth of tradition meets the taste of home. We bring authentic Mexican flavors to every bite, with freshly baked pastries, breads, and sweets made with love. Whether you're here for a classic concha, a sweet empanada, or a savory bolillo, we invite you to experience the joy of Mexican baking right here in our cozy corner. Bienvenidos!
            </div>
            
            <div className="contact-image">
                <img src={`${process.env.PUBLIC_URL}/concha.jpg`} alt="Bakery items" />
            </div>
            
            <h2 className="section-title">Our Food</h2>
            <div className="home-section">
                At Concha Corner, we celebrate the rich heritage of Mexican baking with every treat we create. Our menu is filled with a variety of traditional pan dulce, from the beloved concha to warm bolillos and sweet empanadas. Each pastry is crafted by hand, using time-honored family recipes and the finest ingredients to bring you an authentic taste of Mexico. Baked fresh daily with love and care, our treats are more than just food — they’re a piece of home. Indulge in the warmth and flavor of Concha Corner, where tradition meets sweetness in every bite.
            </div>
            
            <h2 className="section-title">Custom Orders</h2>
            <div className="home-section">
                At Concha Corner, we believe every occasion deserves a touch of sweetness made just for you. We offer custom orders to bring your vision to life, whether you're celebrating a birthday, wedding, or any special event. From personalized conchas to custom-designed pastries and cakes, our team will work with you to create treats that not only look beautiful but taste unforgettable. Let us add a unique flavor to your celebration with baked goods made from scratch and crafted with love. Reach out to us to discuss your custom order today!
            </div>
            
            <div className="home-section">
                Today, Pan Dulce Bakery continues to be a family-run business, staying true to our roots while embracing new traditions. We use only the finest ingredients, baking daily to ensure each item is fresh and flavorful. From our humble beginnings to becoming a local favorite, our commitment remains the same: to bring a little piece of Mexico to every table.
            </div>
        </div>
    );
}

export default Home;