const express=require("express");
const app=express();
const port =9000;
app.get("/",(req,res)=>{
    res.json({name:"sumit sharma"});
})
app.listen(port,()=>console.log("server running at port 9000"))