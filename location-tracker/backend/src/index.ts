import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { setupRealtime } from './realtime';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432')
});

app.use(cors());
app.use(express.json());

// API endpoints
app.get('/api/location', async (req, res) => {
  let { phone } = req.query;
  if (typeof phone === 'string') {
    phone = phone.trim();
  }
  try {
    let result;
    if (phone) {
      console.log('Searching for phone:', phone);
      result = await pool.query(
        'SELECT * FROM locations WHERE phone = $1 ORDER BY timestamp DESC LIMIT 1',
        [phone]
      );
      console.log('DB result:', result.rows);
    } else {
      result = await pool.query('SELECT * FROM locations ORDER BY timestamp DESC LIMIT 1');
    }
    res.json(result.rows[0] || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
});

app.post('/api/location', async (req, res) => {
  const { phone, latitude, longitude } = req.body;
  if (!phone || !latitude || !longitude) {
    return res.status(400).json({ error: 'phone, latitude, and longitude required' });
  }
  try {
    await pool.query(
      'INSERT INTO locations (phone, latitude, longitude, timestamp) VALUES ($1, $2, $3, NOW())',
      [phone, latitude, longitude]
    );
    res.status(201).json({ message: 'Location updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update location' });
  }
});

const server = createServer(app);
setupRealtime(server);
server.listen(port, () => {
  console.log(`Server running with Socket.IO on port ${port}`);
});
