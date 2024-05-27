import React, { useEffect, useState } from 'react';

function Search({ name, addToWishlist }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (name) {
            fetch(`https://dummyjson.com/products/search?q=${name}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [name]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            {products.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map(product => (
                        <li key={product.id} className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center">
                            <div className="image mb-2">
                                {product.images.length > 0 && (
                                    <img
                                        src={product.images[Math.floor(Math.random() * product.images.length)]}
                                        alt={`${product.title} image`}
                                        className="w-full h-auto"
                                    />
                                )}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">{product.title}</h3>
                            <p className="text-gray-700 mb-2 text-center">{product.description}</p>
                            <p className="font-semibold mb-2 text-center">Price: <span className="text-green-600">${product.price}</span></p>
                            <button 
                                onClick={() => addToWishlist(product)}
                                className="bg-blue-500 text-white py-2 px-4 rounded text-center"
                            >
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default Search;
