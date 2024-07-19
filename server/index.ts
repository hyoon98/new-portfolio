import * as mongodb from "mongodb";
export {};
import express from 'express';
import { connectToDB, getDB } from './db';
import ArticleRouter from './routes/articles';
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