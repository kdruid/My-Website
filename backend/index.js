
const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.post('/api/login',(req,res) =>{
    const {username, email} = req.body;
    if (!username || !email) {
        return res.status(400).json({ message: 'Lacking username or email.'});
    }   
    console.log('Login attempt:', username, email);
    res.json({ message: 'Login received successfully!'});
});

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
})
