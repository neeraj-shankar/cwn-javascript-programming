const { Client } = require('pg');
require('dotenv').config();

async function connectAndQuery() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const database = process.env.DB_NAME;
  console.log(user)

  const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');

    const query = 'SELECT NOW()'; // Assuming no dynamic data insertion
    const result = await client.query(query);

    console.log('Query Result:', result.rows);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

connectAndQuery();
