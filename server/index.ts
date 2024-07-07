import * as mongodb from "mongodb";

export {};
const express = require('express');
const {connectToDB,getDB}=require('./db')
const ArticleRouter= require('./routes/articles')
const app=express();

let db:mongodb.Db;


connectToDB( "blog", (err)=>{
    if(!err){
        app.listen(5000,()=>{
            console.log('Server is running on port 5000')
        })
        db=getDB();
    }
})

app.use((req, res, next) => {
    req.db = db;
    next();
});

app.use('/articles',ArticleRouter)