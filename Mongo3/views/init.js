const mongoose = require("mongoose");
const chat = require("./models/chat.js");
main()
.then(()=> {
    console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [ {
    from:"kamelsh",
    to:"suraj",
    msg:"I will be teach you after some time.",
    created_at : new Date(),
    },
     {
    from:"rakesh",
    to:"rohan",
    msg:"all the best brother",
    created_at : new Date(),
    },
 {
    from:"rohit",
    to:"sunil",
    msg:"i have a plan for a long tore ",
    created_at : new Date()
    },
     {
    from:"neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at : new Date(),
    },
    {
    from:"tony",
    to:"peter",
    msg:"you are new avenger",
    created_at : new Date(),
    },
    {
    from:"thor",
    to:"rocky",
    msg:"i am a thor ,divine of thunder",
    created_at : new Date(),
    },
];

Chat.insertMany(allChats);