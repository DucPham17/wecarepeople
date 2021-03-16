const express = require("express");
const router = express.Router();
const app = require("../firebase");
const firebase = require("firebase/app");
require("firebase/auth");
// firebase.initializeApp(app);
const admin = require('firebase-admin');
// admin.initializeApp();
const db = admin.firestore();

router.get('/posts',(req,res) =>{
    //db.collection('posts')
})



module.exports = router;