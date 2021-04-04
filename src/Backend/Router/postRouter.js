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
    //console.log(doc.id);
    list.push({
      postId: doc.id,
      userPostName: doc.data().userPostName,
      userPostId: doc.data().userPostId,
      text: doc.data().text,
      imgUrl: doc.data().imgUrl,
      date: doc.data().date
    })
  });
  await res.send(list);
})

router.post('/addPost', upload.single('file'), async (req, res) => {
  var tempImgUrl = null;
  if (req.file != null) {
    tempImgUrl = await utils.uploadImage(req.file);
  }
  const post = {
    userPostName: req.body.name,
    userPostId: req.body.userId,
    text: req.body.message,
    imgUrl: tempImgUrl,
    date: Date.now(),
    comments: []
  }
  db.collection('posts').add(post);
  //console.log(req.body.name);
  res.send("abc");
})

router.get('/getPost/:id', async (req, res) => {
  const id = req.params.id;
  const doc = await get(id);
  if (doc != null) {
     res.send(doc);
  }
  else {
    res.status(401).send("Invalid");
  }

})

router.post('/addPostComment', async (req, res) => {
  const postId = req.body.postId;
  const text = req.body.text;
  const userName = req.body.userName;
  const userId = req.body.userId;
  await db.collection("comments").add({
    text: text,
    userName: userName,
    userId: userId,
    date: Date.now(),
    postId : postId
  })
  //console.log(comId);
})

const get = async (id) => {
  const doc = await db.collection('posts').doc(id).get();
  const coms = await db.collection('comments').where('postId', '==', id).get();
  if (doc.data() != null) {
    var temp = doc.data();
    comsList = [];
    coms.forEach(doc => {
      comsList.push(doc.data());
    });
    //console.log(comsList);
    temp.comments = comsList;
    return temp;
  }
  else {
    //  console.log("error");
    return null;
  }
}





module.exports = router;