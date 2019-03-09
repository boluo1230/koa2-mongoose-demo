# koa2-mongoose-demo

> github地址 https://github.com/boluo1230/koa2-mongoose-demo

> 本项目是采用koa2框架制作的模板demo  


> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^  
> 如果你觉得对你有帮助，可以点击folk，或者follow一下，我会不定时跟新一些有趣的东西.~~~ 0.0  

##### 环境
 1. node v11.9.0
 3. npm 6.5.0
 
##### 技术栈 
> [koa2]

> [es6-es7]
  
> [nodeJs]

> [mongodb] [mongoose]

### 目录结构
<pre>
.
├── models                   // model层 处理数据
│	├── cagegory.js             // 处理文章数据
│   ├── comment.js              // 处理评论
│   ├── post.js                 // 处理传输数据
│	└── user.js                 // 处理用户数据
├── config                   // 数据库配置文件
├── middlewares              // 公用的中间件
├── package.json             // 项目配置文件
├── routes                   // 路由
├── copntroller              // api function
├── constants                // 异常，结果处理等静态变量
├── .gitignore               //git忽略文件
</pre>

### 本地测试环境：  
#### 第一步：安装mongodb.可以去菜鸟教程
#### 第二步：npm install 把项目依赖安装.  
#### 第三步：npm run dev 启动项目   
#### 第四步：浏览器输入 localhost:3000
