import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Search from './Component/Search';
import Wishlist from './Component/Wishlist';

function App() {
    const [name, setName] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [isWishlistVisible, setIsWishlistVisible] = useState(false);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.find(item => item.id === product.id)) {
                console.log(`Adding product to wishlist: ${product.title}`);
                return [...prevWishlist, product];
            }
            return prevWishlist;
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => {
            console.log(`Removing product with id: ${productId} from wishlist`);
            return prevWishlist.filter(item => item.id !== productId);
        });
    };

    const toggleWishlistVisibility = () => {
        console.log('Toggling wishlist visibility');
        setIsWishlistVisible(!isWishlistVisible);
    };

    return (
        <>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <Navbar 
                name={name} 
                setName={setName} 
                toggleWishlistVisibility={toggleWishlistVisibility} 
            />
            {isWishlistVisible ? (
                <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
            ) : (
                name === '' ? (
                    <Home addToWishlist={addToWishlist} />
                ) : (
                    <Search 
                        name={name} 
                        addToWishlist={addToWishlist} 
                    />
                )
            )}
        </>
    );
}

export default App;
