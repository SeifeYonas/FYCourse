var express = require("express");
var router = express.Router();
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fycourse-b4f8c.firebaseio.com/",
});

router.get("/", function (req, res, next) {
  const db = admin.firestore();
  db.collection("sampleCollection")
    .doc("sampleDocument")
    .set({ Name: "Seife Yonas", LevelOfFyness: "900" })
    .then(() => console.log("my literal response"))
    .catch(() => console.log("error"));
  res.send("API is working");
});

module.exports = router;
