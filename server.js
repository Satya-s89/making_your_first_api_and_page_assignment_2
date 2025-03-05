const express = require('express');
const app = express();

app.get('/status-info', (req, res) => {
    try {
        const statusCode = req.query.code;

        if (!statusCode) {
            throw new Error("Status code is required as a query parameter.");
        }

        let message = '';
        switch (statusCode) {
            case '200':
                message = 'OK: The request has succeeded. The meaning of this status depends on the HTTP method used.';
                break;
            case '201':
                message = 'Created: The request has been fulfilled, resulting in the creation of a new resource.';
                break;
            case '204':
                message = 'No Content: The server successfully processed the request and is not returning any content.';
                break;
            case '400':
                message = 'Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).';
                break;
            case '401':
                message = 'Unauthorized: The client must authenticate itself to get the requested response.';
                break;
            case '403':
                message = 'Forbidden: The client does not have permission to access the requested content.';
                break;
            case '404':
                message = 'Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.';
                break;
            case '405':
                message = 'Method Not Allowed: The request method is known by the server but has been disabled and cannot be used.';
                break;
            case '429':
                message = 'Too Many Requests: The user has sent too many requests in a given amount of time.';
                break;
            case '500':
                message = 'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.';
                break;
            case '502':
                message = 'Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.';
                break;
            case '503':
                message = 'Service Unavailable: The server is currently unable to handle the request due to a temporary overload or maintenance.';
                break;
            case '504':
                message = 'Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.';
                break;
            default:
                message = 'Invalid Status Code: Please provide a valid HTTP status code.';
        }

        res.json({
            status: parseInt(statusCode),
            message: message
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
