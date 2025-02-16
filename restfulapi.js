const express = require('express');
const app = express();

// User Data:
const userInfoData = [
    {
        "id": 1,
        "firstName": "Tarsis",
        "lastName": "Mukiibi",
        "phoneNumber": 779316508

    },
    {
        "id": 2,
        "firstName": "Alexis",
        "lastName": "Namakula",
        "phoneNumber": 779085613
    },
    {
        "id": 3,
        "firstName": "John",
        "lastName": "Mukulu",
        "phoneNumber": 7076382922
    }
];

// Create End Point
app.get('/api/users', function(req, res){
    res.json(userInfoData);
})

app.get('/api/info', function(req, res){
    res.send('Welcome to the NODE system API...');
})
app.get('/api/users/:id', function(req, res){
    const id = req.params.id;
    const user = userInfoData.find(user => user.id == id);

    if(user){
        res.json(user)
    }
    else{
        res.send('User not found')
    }
})

// start node server
const port = 3000;
app.listen(port, function(){
    console.log('Server is starting please call')
})

