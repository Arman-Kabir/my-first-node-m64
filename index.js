const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my own personal over smarty file');
});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01926204425' },
    { id: 2, name: 'ana', email: 'ana@gmail.com', phone: '01926204425' },
    { id: 3, name: 'sana', email: 'sana@gmail.com', phone: '01926204425' },
    { id: 5, name: 'saana', email: 'saana@gmail.com', phone: '01926204425' },
    { id: 6, name: 'bana', email: 'bana@gmail.com', phone: '01926204425' },
    { id: 7, name: 'sina', email: 'sina@gmail.com', phone: '01926204425' },
    { id: 8, name: 'bina', email: 'bina@gmail.com', phone: '01926204425' },
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(matched);

    }else{
        res.send(users);
    }

    console.log('query',req.query);
    
});



app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('listeniong to port', port);
})