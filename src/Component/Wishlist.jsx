import React, { useState } from 'react';

function WishlistItem({ item, onRemove }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        console.log(`Add item with id: ${item.id} to cart with quantity: ${quantity}`);
    };

    const handleQuantityChange = (e) => {
        let newQuantity = parseInt(e.target.value);
        newQuantity = Math.max(1, newQuantity);
        newQuantity = Math.min(10, newQuantity);
        setQuantity(newQuantity);
    };

    return (
        <div className="wishlist-item gap-2.5 border rounded-lg shadow-md p-4 mb-4 bg-white w-80 items-center justify-between">
            <img src={item.images[0]} alt={item.title} style={{ width: '300px', height: '250px' }} className="object-cover rounded mr-4" />
            <div>
                <h4 className="text-lg font-semibold text-black">{item.title}</h4>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-gray-600">Rating: {item.rating}</p>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-600 mt-2">Total: ${item.price * quantity}</p>
                <div className="flex items-center">
                    <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)} className="text-black bg-white-900 py-1 px-2 rounded mr-2 text-2xl">+</button>
                    <input type="number" min="1" max="10" value={quantity} onChange={handleQuantityChange} className="text-black border rounded mr-2 w-20 py-1 px-2 text-center relative top-1" />
                    <button onClick={() => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1))} className="text-black bg-white-400 py-1 px-2 rounded mr-2 text-3xl">-</button>
                </div>
                <div>
                    <button onClick={() => onRemove(item.id)} className="text-black bg-red-400 py-2 px-4 rounded mr-2">
                        Remove
                    </button>
                    <button onClick={handleAddToCart} className="text-black bg-green-400 py-2 px-4 rounded">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}

function Wishlist({ wishlist, removeFromWishlist }) {
    return (
        <div className="p-4 flex flex-wrap gap-20px justify-evenly">
            {wishlist.length > 0 ? (
                wishlist.map(item => (
                    <WishlistItem key={item.id} item={item} onRemove={removeFromWishlist} />
                ))
            ) : (
                <p className="text-center text-gray-500">No items in wishlist</p>
            )}
        </div>
    );
}

export default Wishlist;
