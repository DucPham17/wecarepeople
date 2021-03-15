const express = require("express");
const app = require("../firebase");
const firebase = require("firebase/app");
require("firebase/auth");
const router = express.Router();
firebase.initializeApp(app);
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

router.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            res.send(user);

            // ...
        })
        .catch((error) => {
            res.status(401).send("Invalid email or password");
        });
})

router.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
     firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("aaa");
            // Signed in 
            var user = userCredential.user;
            user.updateProfile({
                displayName: name,
            }).then(function () {
                res.send("abc");
            }).catch(function (error) {
                // An error happened.
            });
            res.send(user);
        })
        .catch((error) => {
            res.status(401).send("Existed email");
        });

})

router.get("/signout", (req,res) => {
    firebase.auth().signOut();
    res.send("abc");
})




module.exports = router;