const express = require('express');
const cors = require('cors');
const monogoose = require('mongoose');
const { default: EmpModel } = require('./EmpModel/EmpModel');
const { default: MessageModel } = require('./EmpModel/Message');
const { mongooseConnection } = require('./config/Db');

const app = express();

app.use(express.json());
app.use(cors());

//connecting db here
const connectDb = async ()=>{
    try {
        await monogoose.connect('mongodb://localhost:27017/employee')  //database name after connection string
        console.log("database is connected");
    } catch (error) {
        console.error('error occured during register: ',error)
    }
}
connectDb();

//register  API 
app.post('/register',(req,res)=>{
    EmpModel.create(req.body)
    .then(employees =>res.json(employees))
    .catch(err => res.json(err));
})

//login  API
app.post('/login',(req,res)=>{
    const {name,password} = req.body;
    EmpModel.findOne({name: name})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("incorrect password");
            }
        }
        else{
            res.json("no record exist");
        }
    })
    .catch(err => {
        console.log("error during login",err);
        res.status(500).json({message:'internal server error', error:err});
    })
})

//get all messages API
app.get('/messages', async (req, res) => {
    try {
        const messages = await MessageModel.find().sort({ timestamp: -1 }); // Get latest messages first
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching messages' });
    }
});

//post all messages API
app.post('/messages', async (req, res) => {
    try {
        const { user, text } = req.body;
        const newMessage = new MessageModel({ user, text });
        await newMessage.save();
        res.status(201).json(newMessage); // Send back the saved message
    } catch (err) {
        res.status(500).json({ error: 'Error saving message' });
    }
});



app.listen(5001,async ()=>{
    try{
// await mongooseConnection();
console.log('server is running and mongoose db connected');
    }
    catch(err){
        console.log("ERROR", err.message)
    }

})



