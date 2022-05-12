/* 
md zonaet hossain
data: 12-5-22
*/
// require
const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const todoSchema=require('../schemas/todoSchema');
// create mongoose model
const Todo=new mongoose.model('Todo',todoSchema);



// todo api
// post todo
router.post('/',async(req,res)=>{
     const data=new Todo(req.body);
     await data.save((err)=>{
          if(err){
               res.status(500).json({
                    error:"this is server site error"
               });
          }else{
               res.status(200).json({
                    message:'data is saved'
               });
          }
     });
});

// post all many todos
router.post('/all',async(req,res)=>{
     await Todo.insertMany(req.body,(err)=>{
          if(err){
               res.status(500).json({
                    error:"this is server site error"
               });

          }else{
               res.status(200).json({
                    message:"all post data save"
               });
          }
     })

});



// get all todo
router.get('/',async(req,res)=>{
     await Todo.find({status:'active'},(err,data)=>{
          if(err){
               res.status(500).json({
                    error:"this is server side error"
               });

          }else{
               res.status(200).json({
                    result:data,
                    message:'get successfully'
               })
          }
     })

});

// get  single todo
router.get('/:id',async(req,res)=>{

});

// put a todo
router.put('/:id',async(req,res)=>{
     await Todo.updateOne({_id:req.params.id},{
          $set:{
               status:'active'
          }
     },
     (err)=>{
          if(err){
               res.status(500).json({
                    error:'this is server site error'
               });

          }else{
               res.status(200).json({
                    message:'update is successfully'
               });
          }
          
     }

     )

});

// delete a todo
router.delete('/:id',async(req,res)=>{

});


// export file
module.exports=router;