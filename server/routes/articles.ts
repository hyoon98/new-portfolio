import express from 'express';
const router = express.Router();

router.post('/post-article',(req,res)=>{
    console.log(req.body)
    // const db=req.db;
    res.send('Create an article')
})

export default router;