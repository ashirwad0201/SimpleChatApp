const express = require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<form action="/" method="POST"><input type="text" name="chat"><button type="submit">Send</button></form>');
});
router.post('/',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    });

module.exports=router;
