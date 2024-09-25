const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const API_KEY = 'starchain-api-key-654321';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); 
    if (token !== API_KEY) return res.sendStatus(403); 
    next(); 
}

function decodeBase64(encoded) {
    try {
        const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
        return decoded;
    } catch (error) {
        throw new Error('Failed to decode Base64');
    }
}

app.get('/decode', authenticateToken, async (req, res) => {
    const encodedInput = req.query.encoded;
    if (!encodedInput) {
        return res.status(400).send('Encoded input is required');
    }

    try {
        const decoded = decodeBase64(encodedInput.trim());
        console.log(`Decoded: ${decoded}`);

        try {
            const response = await axios.get(decoded);
            console.log(`HTTP Response: ${response.data}`);
            res.json(response.data);
        } catch (error) {
            console.error(`Failed to make HTTP request: ${error.message}`);
            res.status(500).send(`Failed to make HTTP request: ${error.message}`);
        }
    } catch (error) {
        console.error(`Failed to decode: ${error.message}`);
        res.status(400).send(`Failed to decode: ${error.message}`);
    }
    
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});