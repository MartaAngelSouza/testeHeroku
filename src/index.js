const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) =>{
    res.sendFile(path.resolve('src','view','index.html'));
})


app.listen(300,()=> console.log('Server started on port 3000'));