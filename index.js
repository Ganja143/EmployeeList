const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const app = express()

const RegisterSchema = require("./models/UserSchema")

const NewEmp =require("./models/EmpSchema")

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/projects",

{
    useNewUrlParser: true,
} 
    

);

app.post('/Register', async (req, res) => {

    console.log(req.body)
    const fullNames=req.body.FullNames
    const cellNumber=req.body.cellNumber
    const userName=req.body.Username
    const password=req.body.password

   

    const newuser= new RegisterSchema({FullNames:fullNames,cellNumber:cellNumber, UserName:userName,password:password})

    try {
        await newuser.save();
        res.send(newuser)
       // res.render('/')
       res.redirect("/");
        
    } catch (err) {

        console.log(err)
    }
})

 app.post('/Add', async(req,res)=> {

    console.log(req.body)
    const name=req.body.Name
    const age=req.body.Age
    const surname=req.body.Surname
    const position=req.body.Position
    const phone=req.body.Phone

    const addEmployee = new NewEmp({Name:name,Age:age,Surname:surname,Position:position,Phone:phone})

    try {
        await addEmployee.save();
        res.send(addEmployee)
       // res.render('/')
      // res.redirect("/EmployeeList");
        
    } catch (err) {
        console.log(err)
    } 

 })

 app.get('/Employee', async (req, res) =>{
     NewEmp.find( {}, (err, result)=>{
     if(err){
        res.send(err)
     }
      res.send(result)
    })
})




app.listen(3002, () =>{

    console.log(("Server running on port 3002"));
});