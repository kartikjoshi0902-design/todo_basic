const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const path = require("path");
const fs = require("fs");
let user = [];
app.use(express.json());
const JWT_SECRET = "IfasdfdvsavadfadbdbdafovefasdfasfsddadfvbadfbvdafZvsftanishkafsvafasffnvlssfaskfsfaasdfsafsagsa";

app.post('/find',(req,res)=>
{
    let use = req.body.username ;
    let pass = req.body.password ;
    let credential = user.find((x)=> use===x.username && pass===x.password);
    if(credential)
    {   let token = jwt.sign({username:use},JWT_SECRET);
        
        return res.json({msg:"1",tok:token});
    }
    else 
    {
        return res.json({msg:"0"});
    }
});
app.post('/new_member',(req,res)=>
{
    let use = req.body.username ;
    let pass = req.body.password ;
    user.push({username:use,password:pass});
    let token = jwt.sign({username:use},JWT_SECRET);
    return res.json({msg:"Welcome newbie",
        tok:token 
    });
});
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,"login.html")));
app.get('/record',(req,res)=>res.sendFile(path.join(__dirname,"record.html")));
app.get('/signin',(req,res)=>res.sendFile(path.join(__dirname,"signin.html")));
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,"index.html")));
app.listen(4000);
