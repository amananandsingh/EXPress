console.log("hello");
const express=require('express');   //imp
const app=express(); 

app.get('/si/calculate',(req,res)=>{
    //  res.end('<h1>from root</h1>')
      let pri=req.query.pri;
      let rat=req.query.rat;
      let tim=req.query.tim;
      let si=(pri*rat*tim)/100;
      //console.log(name);
      //let password=req.query.password;
      //console.log(password);
      res.end("<H1>HELLO MY FRIEND</H1>"+si);
     // res.send("<H1>pass</H1>"+password);
    
  })
  app.listen(3000,(error)=>{
      console.log('server is running');
  })