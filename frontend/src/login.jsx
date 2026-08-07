//import "./login.css"
import { useState } from 'react'

function Main() { 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !email) {
        setError('Please fill in both fields.');
        return;
    }
        setError('Either username or email is not filled')
};
    const pattern = /\^[\^\s@]+@[\^\s@]+\.[\^\s@]+$/;
    return pattern.test(email);
    console.log(valid(email) ? "Valid email address" : "Invalid email address");

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                type="text"
                placeholder="Username or Company name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type="text"
                placeholder="Email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
);
}

export default Main