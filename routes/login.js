const express=require('express');
const router=express.Router();

router.get('/login',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<form action="/login" method="POST"><input type="text" name="username" placeholder="username"><button type="submit">Login</button></form>');
    });
router.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    });

module.exports=router;