const express=require('express');
const router=express.Router();

router.get('/login',(req,res,next)=>{
    console.log('In the middleware');
    res.send(`
    <form action="/login" method="POST"><input type="text" id="username" name="username" placeholder="username"><button type="submit" onclick="login()">Login</button></form>
    <script>
    function login() {
        const username = document.getElementById('username').value;
        localStorage.setItem('username', username);
    }
    </script>
    `);
    });
router.post('/login',(req,res,next)=>{
    console.log(req.body.username);
    res.redirect('/');
    });

module.exports=router;