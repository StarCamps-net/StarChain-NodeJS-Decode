const readline = require('readline');
const axios = require('axios');


function decodeBase64(encoded) {
    try {
        const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
        return decoded;
    } catch (error) {
        throw new Error('Failed to decode Base64');
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter a StarChain Base64 encoded value: ', async (encodedInput) => {
    try {
        const decoded = decodeBase64(encodedInput.trim());
        console.log(`Decoded: ${decoded}`);

        try {
            const response = await axios.get(decoded);
            console.log(`HTTP Response: ${response.data}`);
        } catch (error) {
            console.error(`Failed to make HTTP request: ${error.message}`);
        }
    } catch (error) {
        console.error(`Failed to decode: ${error.message}`);
    } finally {
        rl.close();
    }
});