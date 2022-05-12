/* 
md zonaet hossain
data:12-4-22
*/

// require 
const mongoose=require('mongoose');

// todo schema create
const userSchema=mongoose.Schema({
     name:{
          type:String,
          required:true
     },
     userName:{
          type:String,
          required:true

     },
     password:{
          type:String,
          required:true

     },
     status:{
          type:String,
          enum:['active','inactive']
     }
});

// file export
module.exports=userSchema;