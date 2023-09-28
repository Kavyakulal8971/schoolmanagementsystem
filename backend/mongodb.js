const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://kavya:kavya8310@cluster0.540m8sj.mongodb.net/school")
.then(()=>{
    console.log('mongodb connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection