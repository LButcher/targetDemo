const express = require('express');
const path = require('path');
const app = express();

var users = [
  {userId: 1, name: "Bob Smith", phone: "123123123", gender: "M", age: "61", interests: []},
  {userId: 2, name: "John Smith", phone: "", gender: "M", age: "21", interests: []},
  {userId: 3, name: "Jane Smith", phone: "", gender: "F", age: "44", interests: []}
]

var currUser = {};


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(require("body-parser").json());

app.get('/api/user/:userId', (req, res) => {
  
  currUser = users.find(user => user.userId ==req.params.userId);
  res.json(currUser);

});
app.put('/api/user/replaceUsers', (req,res) => {
    users = req.body.users;
});

app.put('/api/user/:userId',(req,res)=>{

  try {
    let user = users.find(user => user.userId ==req.params.userId);
    let updates = req.body.updateDetails;
    let updateKey = Object.keys(updates)[0];
    let updateVal = updates[updateKey]
    
  
    user[updateKey] = updateVal;
  
    res.json("put: "+JSON.stringify(req.body));
  }
  catch(e){
    console.log(e);
  }
  
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);