import { useState } from "react";
import "./Login.css";

function Registration({ setShowLogin }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {
        const res = await fetch("https://fullstack-ecom-render.onrender.com/account/register/", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        if (res.ok) {
            setRegistrationSuccess(true);
            setUsername("");
            setEmail("");
            setPassword("");
            setTimeout(() => {
                setShowLogin(true);
            }, 3000);
        } else {
            const data = await res.json();
            setErrorMessage(data.message || "Registration failed.");
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
                setErrorMessage("");
            }, 3000);
        }
    };

    return (
        <div id="form-container" role="form">
            <h1 className="titles">Registration</h1>
            <div className="label">Username</div>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                aria-label="Username"
            />
            <div className="label">Email</div>
            <input 
                type="email"  
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                aria-label="Email"
            />
            <div className="label">Password</div>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                aria-label="Password"
            />
            <input 
                type="button" 
                className="submit" 
                value="Register" 
                onClick={handleRegister} 
            />
            <div className="label msg">
                ◆ Already have an account? <a onClick={() => setShowLogin(true)} href="#">Login</a>
            </div>
            {registrationSuccess && <p>Registration successful! Redirecting to login...</p>}
            {isError && <p>{errorMessage}</p>}
        </div>
    );
}

export default Registration;
