const express = require("express")       //require() is a built-in Node.js function used to import modules.
const app = express();                  // Creates an instance of an Express application

// app.get('/',(req,res)=>{
//     res.send("Server is responding!")
// })

app.use(express.static("public"))
app.listen(5001, ()=>{
    console.log("Server is listening at 5001!")
})