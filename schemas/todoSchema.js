/* 
md zonaet hossain
data:12-4-22
*/

// require 
const mongoose=require('mongoose');

// todo schema create
const todoSchema=mongoose.Schema({
     title:{
          type:String,
          required:true
     },
     description:String,
     status:{
          type:String,
          enum:['active','inactive']
     },
     date:{
          type:Date,
          default:Date.now
     }
});


// exports file
module.exports=todoSchema;


