const express = require('express')
const app = express()
const bcrypt = require('bcrypt')


const users = []


app.set('view-engin','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render("index.ejs",{name:"nathan"})
})
app.get('/login',(req,res)=>{
    res.render("login.ejs")
})

app.post('/Login',(req,res)=>{
    
})


app.get('/register',(req,res)=>{
    res.render("register.ejs")
})
app.post('/register',async(req,res)=>{
    try{
     const hashedPassword = await bcrypt.hash(req.body.password, 10)
     users.push({
        id: Date.now.toString(),
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
     })
     res.redirect('/login')
    }catch{
res.redirect('/register')
    }
    console.log(users)
})
app.listen(3000)