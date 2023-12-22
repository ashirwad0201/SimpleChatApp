const express = require('express');
const fs=require('fs');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<form action="/" method="POST"><input type="text" name="chat"><button type="submit">Send</button></form>');
});
router.post('/',(req,res,next)=>{
    const message = req.body.chat;

    fs.appendFileSync('messages.txt', `${message}\n`);
    console.log(req.body);
    res.redirect('/');
    });

module.exports=router;
