const express = require('express');
const app = express();

app.use(express.static('public'));

//----------------------------------------------
// 第一个参数是视图模板（固定），第二个参数是视图模板所在的位置，默认express框架把views文件夹当成视图文件的位置
app.set('views','views');//可以省略。默认

app.set('view engine','ejs');//与下两行等效  如果是.ejs文件，可省略后缀名，
// 需要使用视图模板引擎，让他解析views文件中的.html文件
// 需要安装视图模板引擎：npm install ejs --save
//      const ejs = require('ejs');
//      app.engine('ejs',ejs.renderFile);
// 设置视图引擎
// 加（）立即执行了，没有加（）相当于绑定到前面
    
    // app.engine('ejs',require('ejs').renderFile);//要在order.js里加 res.render('order.ejs')  如果是.ejs文件，必须加上后缀名，
//------------------------------------------------------
app.use(require('./router/order.js'));
app.use(require('./router/product.js'));
// 理解在接口前多加一个前缀
app.use('/api',require('./router/product.js'));

app.listen(7000,function(){
    console.log('服务已经启动，请访问http://localhost:7000');
    // 访问http://localhost:7000 cannot get 没有设置静态资源目录 管线app.use(express.static('public'));/或者用path路径
})

// function myHeader(){}
// addEventListener('click',myHeader)

// http://ejs.bootcss.com