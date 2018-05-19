const express = require('express');
const router = express.Router();
var ed = require('./dao/empdao');
var MongoClient = request('mongodb').MongoClient;  /**引用第三方的一个库，*/

var uri = "mongodb://localhost:27017/myDB";       /*第三方库的地址*/

router.get("/emp", (req,res)=> {
    MongoClient.connect(uri, (err, db) => {     /* err,db是promise,类似于call back,有三种状态，fulfill. req是请求,res是结果*/
        ed.getAllEmp(db, (result) => {          /*pending fail. ajax 是JS用来发异步请求的一个东西，    promix是ajax中发请求的东西。回调函数无论如何都会被执行*/
            res.json(result);
            db.close();
        });
    });
});

router.get('/emp/:name',(req,res) => {
        const_name = req.params.name;
        MongoClient.connect(uri, (err,db) => {
        ed.getOneEmp(db, name, (result)=>{
        res.json(result);
 db.close();
        });
    });
});

module.exports = router;