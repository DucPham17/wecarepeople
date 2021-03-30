const express = require("express");
const router = express.Router();
require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();
const utils = require('../utils.js');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
})


router.get('/getPosts', async (req, res) => {
  var list = [];
  const postRef = db.collection('posts');
  const snapshot = await postRef.get();
  snapshot.forEach(doc => {
    list.push({
      postId : doc.id,
      userPostName : doc.data().userPostName,
      userPostId : doc.data().userPostId,
      text : doc.data().text,
      imgUrl : doc.data().imgUrl,
      comments : doc.data().comments,
      date : doc.data().date
    })
  });
  await res.send(list);
})
 
router.post('/addPost',upload.single('file'), async(req,res) => {
  var tempImgUrl = null;
  if(req.file != null){
    tempImgUrl = await utils.uploadImage(req.file);
  }
  const post = {
    userPostName : req.body.name,
    userPostId : req.body.userId,
    text : req.body.message,
    imgUrl : tempImgUrl,
    date : Date.now(),
    comments : []
  }
  db.collection('posts').add(post);
  //console.log(req.body.name);
  res.send("abc");
})



module.exports = router;