const express = require('express');
const app = express();
const connection = require('./dbConnection'); // Adjust the path if needed

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
