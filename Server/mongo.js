const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://yuvaraj:abcd1234@cluster0.ov1fxpz.mongodb.net/react-login")
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log('failed : ',err.message);
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    inst_name:{
        type:String,
        required:true
    }
})

const feedbackSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

const discussionSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    doubts: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

const discussion = mongoose.model("discussion",discussionSchema);
const feedback = mongoose.model("feedback",feedbackSchema);
const collection = mongoose.model("collection",newSchema);

module.exports={
    feedback,
    collection,
    discussion
}
