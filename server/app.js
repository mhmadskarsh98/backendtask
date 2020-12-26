const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
//get
app.get('/user',(req,res)=>{
    res.json({message:'Hello '+req.param('name')});
})
//post
app.post('/user', (req, res) => {
    console.log(req.body)
    //destruction of object to parse the name
    const { body: { name } } = req;
    const data = {'message':`hello ${name}`};
    // const body = req.body;
    const p = Object.assign(data); // assign it merge between req and body 
    res.json(p);   
})
app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});


