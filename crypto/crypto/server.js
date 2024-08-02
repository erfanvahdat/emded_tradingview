

const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db01',
    password: 'eadmin',
    port: 5432,
});

app.get('/latest-symbols', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT symbol 
            FROM trade_history 
            WHERE date >= NOW() - INTERVAL '10 minutes' 
            ORDER BY date DESC 
            LIMIT 6
        `);
        const symbols = result.rows.map(row => row.symbol);
        res.json(symbols);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



