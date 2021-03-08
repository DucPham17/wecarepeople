const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.get(("/hello"), (req,res)=>{
    console.log(req);
    res.send("hey");
});

app.listen(5000, () => {
    console.log("server started at port 5000")
}) 