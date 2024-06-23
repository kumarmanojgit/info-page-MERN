const express= require('express');
// const port=process.env.PORT || 3000;
const app=express();


app.get('/',(req,res)=>{
  res.status(200).send('hello world');
});

app.get('/register',(req,res)=>{
  res.status(200).send('welocome to register page');
});


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server is running at port :&{PORT}`);
});