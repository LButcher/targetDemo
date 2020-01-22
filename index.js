const express = require('express');
const path = require('path');
const app = express();

var users = [
  {userId: 1, name: "Bob Smith"},
  {userId: 2, name: "John Doe"},
  {userId: 3, name: "Jane Doe"}
]

var currUser = {};

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(require("body-parser").json());

app.get('/api/user/:userId', (req, res) => {
  
  currUser = users.find(user => user.userId ==req.params.userId);
  res.json(currUser);

});

app.post('/api/user',(req,res)=>{
  currUser = users.find(user => user.userId ==req.body.userId);

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