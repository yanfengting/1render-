const express = require('express');

const route = express.Router();

route.get("/product/list",function(req,res,next){
    res.render('product',{
        id:1,
        name:'华为',
        price:2000,
        amount:309,
        products:[
            {id:2,name:'华为1',price:200, amount:309},
            {id:3,name:'华为2',price:20, amount:309}
        ]
    });
});

module.exports = route;