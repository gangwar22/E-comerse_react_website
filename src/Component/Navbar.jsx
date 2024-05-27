import { useState } from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaBars } from 'react-icons/fa';
import Profile from './Profile';

function Navbar({ name, setName, toggleWishlistVisibility }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfileVisibility = () => {
        setShowProfile(!showProfile);
    };

    return (
        <nav className='flex justify-between items-center text-white py-4 px-4 sm:px-6 lg:px-8 h-19 bg-black'>
            <div className="flex items-center">
                <span className="text-lg font-semibold">Shop Online</span>
            </div>
            <div className="flex items-center lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-xl focus:outline-none">
                    <FaBars />
                </button>
            </div>
            <ul className={`flex-col space-y-2 mt-4 lg:mt-0 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                <li><a href="#women" className="hover:text-gray-300">Women</a></li>
                <li><a href="#kids" className="hover:text-gray-300">Kids</a></li>
                <li><a href="#home" className="hover:text-gray-300">Home & Living</a></li>
                <li><a href="#beauty" className="hover:text-gray-300">Beauty</a></li>
            </ul>
            <input
                type="text"
                className='border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 w-full lg:w-[484px] bg-white   h-11 relative top-1 text-green'
                placeholder='Search'
                value={name}
                onChange={(e) => setName(e.target.value)}   
            />
            <ul className="flex items-center space-x-4 mt-4 lg:mt-0">
                <li className="flex items-center">
                    <FaUser className="mr-1" />
                    <p className="text-sm cursor-pointer" onClick={toggleProfileVisibility}>Login</p>
                </li>
                <li className="flex items-center cursor-pointer" onClick={toggleWishlistVisibility}>
                    <FaHeart className="mr-1" />
                    <p className="text-sm">Wishlist</p>
                </li>
            </ul>
            {showProfile && <Profile />}
        </nav>
    );
}

export default Navbar;
    