/* require */
const express=require('express');
const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router=express.Router();
const userSchema=require('../schemas/userSchema');
const User=new mongoose.model('User',userSchema);
const checkLogin=require("../middleware/checkLogin");

/* signup */
// get user
router.get('/signup',async(req,res)=>{

});

// post user
router.post('/signup',async(req,res)=>{
     try{
          const hashedPassword=await bcrypt.hash(req.body.password,10);
          const data=new User({
               name:req.body.name,
               userName:req.body.userName,
               password:hashedPassword
          });
          await data.save();
          res.status(200).json({
          "message":"signup was successfully"
     })
     }catch{
          res.status(500).json({
               "error":"signup failed"
          })
     }

});

// login post
router.post('/login',async(req,res)=>{
     try{
          const userData=await User.find({userName:req.body.userName});
          if(userData && userData.length>0){
               const isValidPassword=await bcrypt.compare(req.body.password,userData[0].password);
     
               if(isValidPassword){
                    const token=jwt.sign({
                         user:user[0].userName,
                         userId:user[0]._id
                    },process.env.JWT_SECRET,{expiresIn:'1hr'});
     
                    res.status(200).json({
                         "access-token":token,
                         "message":"login successfully"
                    })
     
               }else{
                    res.status(401).json({
                         "error":"authentication failed"
                    })
               }
     
     
          }else{
               res.status(401).json({
                    "error":"authentication failed"
               });
          }
     }catch{
          res.status(401).json({
               "error":"authentication failed"
          });
     }
     
})


// file exports
module.exports=router;




