const path = require('path');
const user = require('./MOCK_DATA.json')

const express = require('express');
const app = express();
let port =process.env.port||8000;
app.get('/api/user',(req,res)=>{
    return res.json(user);
});

app.get('/user',(req,res)=>{
    const html =`<ul>
        ${user.map((users)=>`${users.Image}`)}
    </ul>`;
    res.send(html);
})
app.listen(port,()=>{
    console.log(`app turn on port ${port}`);
})

