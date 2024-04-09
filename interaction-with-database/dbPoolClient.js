const {Pool, Client} = require('pg')

// Read connection string from environment variable
// const connectionString = process.env.DATABASE_URL;

const connectionString = 'postgresql://postgres:admin@localhost:5432/postgres';

if (!connectionString) {
  console.error('DATABASE_URL environment variable is not set.');
  process.exit(1); // Exit the process with error status
}

const pool = new Pool({
  connectionString,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000 // Time period (in milliseconds) after which idle clients in the pool will be closed
});

// Test the connection
(async () => {
  try {
    const client = await pool.connect(); // Acquire a client from the pool
    const result = await client.query('SELECT NOW()');
    console.log('Connected to database!');
    console.log('Current time from database:', result.rows[0].now);
    client.release(); // Release the client back to the pool
  } catch (err) {
    console.error('Error connecting to database:', err);
  } finally {
    pool.end(); // Close all client connections in the pool
  }
})();

