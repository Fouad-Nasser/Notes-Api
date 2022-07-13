const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const app = express();
const route = require('./route/route');
const port = 3000;

app.use(cors());

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());


app.get('/',(req,res)=>{
    res.send('Express Hello World')
})

app.use('/',route)


app.listen(port,()=>{
    console.log(`listing at http://localhost:${port}/`)
})
