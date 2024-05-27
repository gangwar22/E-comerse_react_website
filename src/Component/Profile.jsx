import  { useState } from 'react';
import Login from './Login/Login';
import Registration from './Login/Ragister';

function Profile({ setIsLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto backdrop-filter backdrop-blur-sm bg-black bg-opacity-50">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg shadow-xl p-4 max-w-sm mx-auto">
                            {showLogin ? (
                                <Login setIsLogin={setIsLogin} setShowLogin={setShowLogin} />
                            ) : (
                                <Registration setShowLogin={setShowLogin} />
                            )}
                        </div>
                    </div>
                </div>
            )}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>Login</button>
        </div>
    );
}

export default Profile;