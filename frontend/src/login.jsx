import "./login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from '/Dvyne.svg'
import pic from '/20250617_124210.jpg'


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
            const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
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
            navigate('/');
        }
        catch (err){
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <img src={myImage} alt="logo" className="logo" onClick={() =>navigate('/')}/>
            <img src={pic} alt="my_image" className="picture"/>
            <p>
                Want me to follow up? Drop your name and company email below. <br />
                This is competely optional, the resume's yours either way.
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
                <button 
                    onClick={() => navigate('/')}
                    type="submit">
                        Return
                </button>
            </form>
        </div>
    );
}

export default Main