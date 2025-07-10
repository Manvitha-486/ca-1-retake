const express=require('express');
const app=express();
const cors=require('cors');
const port=3558;
app.use(cors());
app.use(express.json());

app.get('/get',(req,res)=>{
    res.status(200).send({message:"Hello World"});
})

app.post('/post',(req,res)=>{
    const {Username,Email,Password,DateOfBirth}=req.body;
    if(!Username){
        res.status(400).json({message:"Username cannot be empty"})
    }
    if(!Email){
        res.status(400).json({message:"Email cannot be empty"});
    }
    const password=Password.length;
    if(password<8 || password>16){
        res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
    }
    else{
        res.status(200).json({message:"successful"});
    }
})


app.listen(port,()=>{
    console.log(`successfully connected at port ${port}`);
})