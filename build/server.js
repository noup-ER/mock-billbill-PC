// const koa = require("koa");
// const app = new koa();
const express = require("express");
const app = new express();
const webpack =require("webpack");
const {port} = require("./util");

const config = require("./webpack.dev.config");
const webpackDevMiddleware  = require('webpack-dev-middleware');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));

// app.use(async (ctx,next)=>{
//     const middleware = webpackDevMiddleware(compiler);
//     console.log(ctx);
//     await middleware(ctx.req,{
//         end:(content)=>{
//             ctx.body = content;
//         },
//         setHeader:(name, value) =>{
//             ctx.set(name,value);
//         }
//     },next);
// });


app.listen(port,()=>{
    console.log("http://localhost:3032");
})