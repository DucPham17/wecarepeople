const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
dotenv.config()
const config = require("./src/Backend/firebase.js");
const firebase = require("firebase/app");
const admin = require('firebase-admin');
//const cors = require('cors');
//console.log(config);
//app.use(cors);
firebase.initializeApp(config);
//console.log(process.env.key);
admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.key)),
    storageBucket: process.env.storageBucket
}); 


const userRouter = require('./src/Backend/Router/userRouter')
const postRouter = require('./src/Backend/Router/postRouter')

app.use(bodyParser.json());
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);

app.listen(5000, () => {
    console.log("server started at port 5000")
}) 