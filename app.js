
// require
const express=require('express');
const cors=require('cors');
require('dotenv').config();

// app declared
const app=express();

// port declared
const port=process.env.PORT| 5000;

// build in  middleware
app.use(express.json());
app.use(cors());


// basic api
app.get('/',(req,res)=>{
     res.send('hello express');
});



// listen app
app.listen(port,()=>{
     console.log('listing the app by port',port);
});
