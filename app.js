
// require
const express=require('express');
const cors=require('cors');
require('dotenv').config();
const mongodb=require('mongodb');
const mongoose=require('mongoose');
const todoHandler=require('./routeHandler/todoHandler');

// app declared
const app=express();

// port declared
const port=process.env.PORT | 5000;

// build in  middleware
app.use(express.json());
app.use(cors());

// database connect with mongoose
mongoose.connect('mongodb://localhost/todos')
.then(()=>console.log('connecting successfully'))
.catch(err=>console.log(err));

app.use('/todo',todoHandler);

// basic api
/* app.get('/',(req,res)=>{
     res.send('hello express');
});
 */



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
