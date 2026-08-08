import "./login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from '../images/portfolioE.jpeg'


function Main() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !email) {
            setError('Please fill in both fields.');
            return;
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        // proceed with login logic here
        try{
            const response = await fetch('/api/login',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({username, email}),
            });
            if (!response.ok){
                setError('Invalid username or email.');
                return;
            }
            const data = await response.json();
            console.log(data.message);
            navigate('/landing');
        }
        catch (err){
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <img src={myImage} alt="logo" className="logo"/>
            <p>
                Welcome in order to view this page you need to fill out the following below
            </p>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Company name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button 
                    type="submit">
                        Login
                </button>
            </form>
        </div>
    );
}

export default Main