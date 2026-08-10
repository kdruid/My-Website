require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');

let authConfig;

if (process.env.GOOGLE_CREDENTIALS_JSON) {
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON);
    authConfig = {
        credentials: credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    };
} else {
    authConfig = {
        keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    };
}

const auth = new google.auth.GoogleAuth(authConfig);

async function appendToSheet(username, email) {
    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Sheet1!A:C',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[username, email, new Date().toISOString()]],
        },
    });
}

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.post('/api/login', async (req,res) =>{
    const {username, email} = req.body;
    
    if (!username || !email) {
        return res.status(400).json({ message: 'Lacking username or email.'});
    }   
    try{
        await appendToSheet(username, email);
        res.json({message: 'Login successful'})
    }
    catch{
        console.error('Error writing to sheet:', err);
        res.status(500).json({message: 'Login unsuccessful'});
    }
});

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
})
