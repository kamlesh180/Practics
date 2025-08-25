const mongoose = require("mongoose");
 main()
 .then(() => {
    console.log("connection successful");
 })
 .catch (() => console.log(err));
 async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/college");
        
 }
 const userSchema = new mongoose.Schema({
   name: String,
   email:String,
   age:Number,
 });
 const User = mongoose.model("User",userSchema);
 User.find({age:{$gt:47}})
 .then((res) => {
   console.log(res);
 })
 .catch((err) => {
   console.log(err);
 });
  const user1 = new User({
   name: "Adam",
   email: "adam@gmail.com",
   age:48,
  });
   const user2 = new User({
   name: "Evm",
   email: "evm@gmail.com",
   age:50,
  });
  user1.save();
  user2.save();