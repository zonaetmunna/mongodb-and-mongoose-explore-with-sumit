
// require
const express=require('express');
const cors=require('cors');
require('dotenv').config();
const mongodb=require('mongodb');

// app declared
const app=express();

// port declared
const port=process.env.PORT | 5000;

// build in  middleware
app.use(express.json());
app.use(cors());


// basic api
app.get('/',(req,res)=>{
     res.send('hello express');
});




// default error handler
const errorHandler=(err,req,res,next)=>{
     if(res.headersSent){
          return next(err);
     }else{
          res.status(5000).json({error:err});
     }

};

// listen app
app.listen(port,()=>{
     console.log('listing the app by port',port);
});
