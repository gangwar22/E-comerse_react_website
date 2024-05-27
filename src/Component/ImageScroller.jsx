import React, { useEffect, useState } from 'react';
import './ImageScroller.css';
import img from "../assets/woman-shopping-online-internet-marketplace-browsing-utmost-sale-items_31965-300009.avif";
import image from "../assets/356-3566627_how-to-choose-natural-skin-care-products-that.png";
import imagess from "../assets/360_F_484522552_LVf1DqCIxo7UG0GtfAas9SPuNpo98pBS.jpg";
import image1 from "../assets/download (1).jpeg";
import image2 from "../assets/download (2).jpeg";
import image3 from "../assets/HD-wallpaper-dairy-products-delicious-food-fruit-grape-cheese-spice-milk-garlic-vegetables-cream.jpg";
import image4 from "../assets/images (1).jpeg";
import image5 from "../assets/images (2).jpeg";
import image6 from "../assets/images (3).jpeg";
import image7 from "../assets/images (4).jpeg";
import image8 from "../assets/images (6).jpeg";
import image9 from "../assets/images (7).jpeg";
import image10 from "../assets/images (8).jpeg";

const images = [
    img,
    image,
    imagess,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
];

const ImageScroller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative text-center top-6">
        <div className="flex justify-center">
            <button onClick={prevImage} className="nav-button bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            <div className="image-container my-4">
                <img src={images[currentIndex]} alt="scroller" className="max-w-full h-auto object-contain" />
            </div>
            <button onClick={nextImage} className="nav-button bg-blue-500 text-white px-4 py-2 rounded ml-2">Next</button>
        </div>
    </div>
    );
};

export default ImageScroller;