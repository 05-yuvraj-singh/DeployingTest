const express=require("express");
const cors=require('cors');
const mongoose = require("mongoose")

const app=express();

const corsOptions = {
  origin: 'https://deploying-test-yuvrajsingh.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};
app.use(cors(corsOptions));
app.use(express.json());


app.use(express.urlencoded({extended: false}))


const port = 4000;

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://yuvrajSingh05:moneY341@testcluster.hqa0fzg.mongodb.net/test-app-db")
.then(()=>{
    console.log("connected to MONGODB");
}).catch(error=>{
    console.log(error);
})
}

connectDB()
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email Already Exists"],
  },
  username: {
    type: String,
    required: true,
    unique: [true, "Username Already Exists"]
  },
  password: {
    type: String,
    required: true
  },
});


const User = mongoose.model("User", userSchema);

const addUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  
  const Login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        username: username,
        password: password,
      });
  
      if (user) {
  
        return res.status(200).json({
          success: true,
          message: "Login Successful",

        });
      } else {
        return res.status(401).json({
          success: false,
          message: "INVALID LOGIN CREDENTIALS",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
const getInfo = async (req,res) =>{
    const username =   req.query.username
    const user = await User.findOne({
       username : username 
     })
     res.status(200).json(user)    
 }


app.post('/signup',addUser);
app.post('/signin',Login);
app.get("/getuserdetails" , getInfo)
  


app.listen(port, () => {
  console.log(`APP RUNNING ON PORT ${port} perfectly`);
});
