# StarChain-NodeJS-Decode
To call the /decode endpoint using Postman, follow these steps:

Create a New Request:

Click on the "New" button in the top left corner.
Select "Request".
Set Up the Request:

Method: Set the HTTP method to GET

URL: Enter the URL for the endpoint, e.g.,
http://localhost:3000/decode

Add Query Parameters:

Click on the "Params" tab below the URL field.
Add a new key-value pair:
Key: encoded
Value: The Base64 encoded string you want to decode, e.g., U29tZSBzdHJpbmcgdG8gYmUgZGVjb2RlZA==

Add Authorization Header:

Click on the "Headers" tab.
Add a new key-value pair:
Key:
Authorization
Value: starchain-api-key-654321
Send the Request: Click the "Send" button.

If everything is set up correctly, you should receive a response from the server. If the Base64 encoded string is a valid URL, the server will attempt to make an HTTP GET request to that URL and return the response data.

Example Response
If the encoded string is U29tZSBzdHJpbmcgdG8gYmUgZGVjb2RlZA==
(which decodes to "Some string to be decoded"), and assuming this is not a valid URL, you might get an error response indicating that the HTTP request failed.

If you encode a valid URL, such as aHR0cHM6Ly9iaXQubHkvNGRpTXUzNA==, you should get a response from the API.

"*000000000000000*315e0280b2d75e83fa0676a23ab18c052d0aa2682c09f754ab56f0346b46723f*160222844860000*7d6445117f6b4fb8fbc9dbf4632f984de12ef16defd3c7c798e2d76f8f4ab0b5*999999999999999*7bbc83f570350a1cb94cce286cb85c68a64aa637f76d07bb02dbe4a6e83fd99c*\n"

Troubleshooting
401 Unauthorized: Ensure that the Authorization header is correctly set with the Bearer token.
400 Bad Request: Ensure that the encoded query parameter is provided and correctly Base64 encoded.
500 Internal Server Error: Check the server logs for more details on what went wrong.
By following these steps, you should be able to successfully call the /decode endpoint using Postman.