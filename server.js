const express = require('express');
const app = express();
const port = 3000;

// SVG 생성 API
app.get('/badge', (req, res) => {
    const name = req.query.name || 'Default Name';
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 300 150">
            <rect width="300" height="150" fill="#f9f9f9" stroke="#4CAF50" stroke-width="4" rx="15" ry="15"/>
            <text x="50%" y="50%" font-size="24" font-family="Arial, sans-serif" fill="#333" dominant-baseline="middle" text-anchor="middle">
                ${name}
            </text>
        </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
