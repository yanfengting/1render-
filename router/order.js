const express = require('express');

const route = express.Router(); 

// 方盒子-属性，不加括号、 立方体-方法加括号
// a标签发起的是get请求，如果要让他发起post请求，要设置监听写事件
route.get('/order/list',function(req,res,next){
    // res.json({code:200});
    // 第一个参数是视图的名称，如果是.ejs文件，必须省略后缀名，如果是.html,.jsp,.abc,.def等自己定义的后缀名时，必须加后缀。
    // 第二个参数是视图需要的数据
    res.render('order',{
        title:'我是订单列表页',
        content:'<h2>我是标题2</h2>',
        person:{
            name:'张三',
            age:20,
            sex:true,
            fav:['读书','听音乐','唱歌']
        }
    });
});

module.exports = route;