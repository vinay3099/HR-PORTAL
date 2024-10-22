const express = require ('express');
const mongoose = require('mongoose');
const Registeruser = require('./model');
 const jwt = require('jsonwebtoken');
 const middleware = require('./middleware');
 const cors = require('cors');
const app = express();

mongoose.connect("mongodb+srv://vinay:vinay123@cluster0.qa255.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
{
  useUnifiedTopology:true,
  useNewUrlParser:true,
  
}).then(
    
  
  ()=>{
        console.log("Db Connected!")
    }
)

app.use(express.json());

app.use(cors({origin:"*"}))

app.post('/register',async(req,res)=>{
   
    try{
      const {username,email,password,confirmpassword}= req.body;

      let exist = await Registeruser.findOne({email:email})
      if(exist){
        return res.status(400).send('User already exist')
      }

      if(password!= confirmpassword){

        return res.status(400).send('Passwords are not matching')
      }

      let newUser = new Registeruser({
        username,
        email,
        password,
        confirmpassword
      })
      
      await newUser.save();
      res.status(200).send("user registered successfully")

    }
    catch(err){
        console.log(err)
        return res.status(500).send("Internal server error")
    }
});


app.post('/login',async(req,res)=>{

    try{
       
        const{email,password}= req.body
        let exist = await Registeruser.findOne({email})
        if(!exist)
        {
            res.status(400).send('user not found')
        }
        
        if(exist.password !== password){
            res.status(400).send("Invalid Credentials!")
        }

        let payload ={
          user:{
            id: exist.id
          }
        }
        jwt.sign(payload,'jwtSecure',{expiresIn:3600000},
            (err,token)=>{
              if(err) throw err;  

              return res.json({token})
            }
        )
    }
    catch(err){
      console.log(err);
      res.status(500).send("server error")

    }
})


app.get('/mydashboard',middleware,async(req,res)=>{

    try{

       let exist = await Registeruser.findById(req.user.id);

       if(!exist){
        res.status(400).send('User not found');
       }

       res.json(exist);
    }
    catch(err){
        console.log(err);
        res.status(500).send("server error");
    }
})


app.listen(5000,(req,res)=>{

    console.log("server is running");

   

});