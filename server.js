const express = require('express');
const app = express();
const fs = require('fs');

app.get('/' , (req , res) => {
    let filePath = './data.json';
    let data = fs.readFileSync(filePath);
    if(!data || data === null || data === undefined){
        res.status()
    } 
});


app.listen(port , () => console.log(`server is running on ${port}`));
module.exports = app;