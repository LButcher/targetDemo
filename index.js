const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

var users = [
  {userId: 1, name: "Bob Smith", phone: "123123123", gender: "M", age: "61", interests: {
    insurance: 0,
    banking: 0,
    investing: 0
  }},
  {userId: 2, name: "John Smith", phone: "", gender: "M", age: "21", interests: {
    insurance: 0,
    banking: 0,
    investing: 0
  }},
  {userId: 3, name: "Jane Smith", phone: "", gender: "F", age: "44", interests: {
    insurance: 0,
    banking: 0,
    investing: 0
  }}
]

var currUser = {};


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(require("body-parser").json());

function parseAffinity(body) {
  body = JSON.parse(body);
  let targetResponse = body.profileAttributes['user.categoryAffinity'].value;

}

app.get('/api/profile/:id', (req,res) =>{
  let queryString = 'https://clientspectrumamerpa.tt.omtrdc.net/rest/v1/profiles/thirdPartyId/3?client=clientspectrumamerpa';
  
  request(queryString, function(err,response,body){
    console.log(body);
    res.json(body);
    //parseAffinity(body);
  })
});

app.get('/api/allUsers', (req, res) => {
  
  res.json(users);

});
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