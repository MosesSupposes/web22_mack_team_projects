const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

const friends = [
    {
        id: 0,
        name: "Chandler Bing",
        currently_dating: "Monica Geller",
        quotes: ["Gum would be perfection", 
        "Could I be anymore of a ____", 
        "Can open. Worms everywhere!"],
    },
    {
        id: 1,
        name: "Pheobe Buffay",
        currently_dating: "Joey Tribbiani",
        quotes: ["I don't even have a pla", 
        "They don't know that we know they know we know", 
        "If it's a boy, Pheebo"],
    },
    {
        id: 2,
        name: "Rachel Green",
        currently_dating: "Ross Geller",
        quotes: ["Does she have a wedding dress?", 
        "It's a trifle. It's got all of these layers.", 
        "How long do cats live?"],
    },
    {
        id: 3,
        name: "Joey Tribbiani",
        currently_dating: "Pheobe Buffay",
        quotes: ["This is all a moo point", 
        "Could I BE wearing any more clothes?", 
        "Joey doesn't share food!"],
    },
    {
        id: 4,
        name: "Monica Geller",
        currently_dating: "Chandler Bing",
        quotes: ["Fine, judge all you want!", 
        "Ross married Rachel in Vegas and got divorced - AGAIN", 
        "Welcome to the real world, it sucks!"],
    },
    {
        id: 5,
        name: "Ross Geller",
        currently_dating: "Rachel Green",
        quotes: ["Unagi is a state of total awareness", 
        "I went to that tanning place your wife suggested", 
        "Monica and Chandler are living together"],
    },
]

server.get('/api/friends', (req, res) => {
    res.send(friends);
})

server.get('/api/friends/:id', (req, res) => {
    const friend = friends.filter(fren => fren.id.toString() === req.params.id)[0];
    res.status(200).json(friend);
})
server.post('/api/friends', (req, res) => {
    if (req.body.id != undefined) friends.push(req.body);
    res.status(201).json(friends);
})

server.listen(5000, () => {
    console.log('Server listening on port 5000');
})