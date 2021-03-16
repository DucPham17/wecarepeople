const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
dotenv.config() 
const userRouter = require('./Router/userRouter')
const postRouter = require('./Router/postRouter')
app.get(("/hello"), (req,res)=>{
    console.log(req);
    res.send("hey");
});
app.use(bodyParser.json());
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);

app.listen(5000, () => {
    console.log("server started at port 5000")
}) 