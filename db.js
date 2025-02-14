const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // default user for XAMPP
    password: '', // default password is empty
    database: 'meeting_scheduler' // your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;
