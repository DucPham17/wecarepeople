const express = require("express");
const router = express.Router();
const app = require("../firebase");
const firebase = require("firebase/app");
require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();
const multer = require('multer');
const upload = multer();
const storageRef = admin.storage().bucket();


router.get('/getPosts', async (req, res) => {
  var list = [];
  const postRef = db.collection('posts');
  const snapshot = await postRef.get();
  snapshot.forEach(doc => {
    list.push({
      userPostName : doc.data().userPostName,
      userPostId : doc.data().userPostId,
      text : doc.data().text,
      imgUrl : doc.data().imgUrl,
      comments : doc.data().comments
    })
  });
  await res.send(list);
})
 
router.post('/addPost', upload.single('file'),async(req,res) => {
  console.log(req.file);
  res.send("abc");
})



module.exports = router;