const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '../public');
console.log(__dirname+'/../public');//if 'path' not used
console.log(publicPath);

app.use(express.static(publicPath));

const port = process.env.PORT||3000;
app.listen(process.env.PORT||3000, ()=>{console.log(`Listening on Port ${port}`);});