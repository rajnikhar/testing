
const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT||5000;


const userId="nikhar_raj_234";
const email="nikhar@gmail.com";
const roll="22187685";


app.get("/", (req, res) => {
    res.send("API received");
})

app.post("/new",(req,res)=>{
    const {data}=req.body;

    if(!Array.isArray(data)){
        return res.status(400).json({success:false,message:"Invalid input format"});

    }

    let evenNumbers=[],oddNumbers=[],alphabets=[];


   data.forEach(item=>{
    if(!isNaN(item)){
        let num=parseInt(item);
        (num%2==0?evenNumbers:oddNumbers).push(item);
    }
    else if(typeof item==="string" ){
        alphabets.push(item.toUpperCase());
    }
   });


   res.json({
    is_success:true,
    user_id:userId,
    email,
    roll_number:roll,
    oddNumbers:oddNumbers,
    evenNumbers:evenNumbers,
    alphabets

   });
});

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));


