const admin = require("firebase-admin");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const serviceAccount = require("../config/googleKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lebonnet-0000.firebaseio.com",
  storageBucket: "lebonnet-0000.appspot.com"
});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { admin, db, storage, FieldValue };
