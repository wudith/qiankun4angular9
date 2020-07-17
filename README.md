# qiankun4angular9


# 一个基于single-spa-angular 和qiankun 的angular9微前端测试例子

![预览图片](https://raw.githubusercontent.com/wudith/qiankun4angular9/master/view.png)


## 1、主应用：main 
基于qiankun (https://github.com/umijs/qiankun) 封装的主页面

运行步骤：
* cd main 
* npm install
* npm run start

访问地址：http://localhost:7099


## 2、微应用：vue
基于vue封装的微应用工程，监听端口7101

运行步骤：
* cd vue 
* npm install
* npm run start


## 3、微应用：angular9
基于single-spa-angular（https://github.com/single-spa/single-spa-angular） 封装的angular9工程

使用@angular-builders/custom-webpack:browser作为builder启动,监听端口4208。在官网例子中对mount生命周期方法进行了扩展，实现了angular子应用和主应用的anction通信

运行步骤：
* cd angular9 
* npm install
* npm run serve:single-spa:my-app

## 相关版本信息
* qiankun 版本：2.0.15
* single-spa-angular 版本：4.1.0


