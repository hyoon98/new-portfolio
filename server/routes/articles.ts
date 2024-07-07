const express = require('express');
const router = express.Router();

router.post('/post-article',(req,res)=>{
    const db=req.db;
    res.send('Create an article')
})

module.exports=router;