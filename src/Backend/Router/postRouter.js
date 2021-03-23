const express = require("express");
const router = express.Router();
const app = require("../firebase");
const firebase = require("firebase/app");
require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();

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



module.exports = router;