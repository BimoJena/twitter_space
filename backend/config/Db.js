const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const MONGO__USER = 'jenabimochan33';
const MONGO__PASS = 'bimochan2631';
const MONGO__URL = `mongodb+srv://jenabimochan33:bimochan2631@cluster0.kbdhhp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// const MONGO__URL = `mongodb+srv://jenabimochan33:bimochan2631@cluster0.mongodb.net/?authSource=admin&replicaSet=<replica-set-name>&tls=true&tlsCAFile=<path-to-certificate>&authMechanism=MONGODB-X509`


const mongooseConnection = async()=>{
    try{
        await mongoose.connect(MONGO__URL);
        console.log("DATABASE SUCCESSFULLY CONNECTED");
    }catch(err){
        console.log(`SOMETHING WENT WRONG IN DATABASE CONNECTION : ${err}`);
    }
}

module.exports  ={mongooseConnection}
