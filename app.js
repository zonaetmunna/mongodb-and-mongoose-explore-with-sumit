
/* require */
// build in
const express=require('express');
const cors=require('cors');
require('dotenv').config();
const mongodb=require('mongodb');
const mongoose=require('mongoose');
// file
const todoHandler=require('./routeHandler/todoHandler');
const userHandler=require('./routeHandler/userHandler');

// app declared
const app=express();

// port declared
const port=process.env.PORT | 5000;

// build in  middleware
app.use(express.json());
app.use(cors());

// database connect with mongoose
mongoose.connect('mongodb://localhost/todos',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(()=>console.log('connecting successfully'))
.catch(err=>console.log(err));

// application routes
app.use('/todo',todoHandler);
app.use('/user',userHandler);

// basic api
app.get('/',(req,res)=>{
     res.send('hello express');
});

// default error handler
const errorHandler=(err,req,res,next)=>{
     if(req.headersSent){
          return next(err);
     }else{
          res.status(5000).json({error:err});
     }

};
app.use(errorHandler);

// listen app
app.listen(port,()=>{
     console.log('listing the app by port',port);
});
