import { useEffect, useState } from 'react';
import './Home.css'; // Import CSS file
import ImageScroller from "./ImageScroller";

import Footer from './Footer';

function Home({ addToWishlist }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <ImageScroller />
            <h1 className='z-0 text-7xl text-white font-semibold flex bg-black justify-center relative top-16'>Products</h1>

            <div className="Product" id='home' >
                <div className="products relative top-5">
                    {products.map(item => (
                        <div key={item.id} className="card">
                            <h1 className='text-2xl font-black'>Brand: {item.brand}</h1>
                            <div className="image relative top-4">
                                {item.images.length > 0 && (
                                    <img
                                        src={item.images[Math.floor(Math.random() * item.images.length)]}
                                        alt={`${item.title} image`}
                                    />
                                )}
                            </div>
                            <div className="info relative top-3">
                                <p>Title: {item.title}</p>
                                <p>Description: {item.description}</p>
                                <h4>Price: ${item.price}</h4>
                                <h5>Rating: {item.rating}</h5>
                            </div>
                            <div className="btn relative top-2 wrap">
                                <button className="button glow-on-hover" onClick={() => addToWishlist(item)}>Add to Wishlist</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </>
    );
}

export default Home;
