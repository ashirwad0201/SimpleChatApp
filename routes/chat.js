const express = require('express');
const fs=require('fs');
const router=express.Router();

router.get('/',(req,res,next)=>{
    const filepath='./messages.txt';
    fs.readFile(filepath,'utf8',(err,data)=>{
        if(!err){
            console.log('In another middleware');
            res.send(`<form action="/" method="POST"><p><pre>${data.toString()}</pre></p><input type="text" name="chat"><input id="idk2" type="hidden" name="username"><button type="submit">Send</button></form><script>document.getElementById('idk2').value=localStorage.getItem('username');
            </script>`);        
        }
        else{
            alert('Something went wrong')
        }
    })
});
router.post('/',(req,res,next)=>{
    const message = req.body.chat;
    const user=req.body.username;

    fs.appendFileSync('messages.txt', `${user + ' : ' + message}\n`);
    console.log(req.body);
    res.redirect('/');
    });

module.exports=router;
