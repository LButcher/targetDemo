const express = require('express');
const path = require('path');
const app = express();

var currUser;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(require("body-parser").json());

app.get('/api/user', (req, res) => {

  res.json(currUser);

});

app.post('/api/user',(req,res)=>{
  currUser = req.body.userId;
  res.json("put: "+JSON.stringify(req.body));
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);