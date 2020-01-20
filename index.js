const express = require('express');
const path = require('path');
const { Client } = require('pg');
const app = express();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

console.log("process");
console.log(process);

client.connect();

let query = 'SELECT * FROM "Users";'
client.query(query, (err, res) => {
  if (err) {throw err};
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
});



// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getUser', (req, res) => {

  res.json("test");

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});/

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);