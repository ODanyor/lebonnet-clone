const { db } = require("../utils/admin");
const firebase = require("firebase");

const { firebaseConfig } = require("../config/firebaseConfig");
firebase.initializeApp(firebaseConfig);

// @route: /users/signUp
// @desc: Register a new user
// @access: Public
exports.signUp = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };

  const { validateSignUpData } = require("../utils/validators");
  const { errors, valid } = validateSignUpData(newUser);
  if (!valid) return res.status(400).json({ errors });

  let token, userId;
  db.collection("users")
    .doc(newUser.email)
    .get()
    .then(doc => {
      if (doc.exists)
        return res
          .status(403)
          .json({ error: "Current email address is already registered." });
      else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password)
          .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken();
          })
          .then(tokenId => {
            token = tokenId;
            const userCredentials = {
              email: newUser.email,
              password: newUser.password,
              createdAt: new Date().toISOString(),
              userId
            };
            db.collection("users")
              .doc(userCredentials.email)
              .set(userCredentials);
            db.collection("carts")
              .doc(userCredentials.email)
              .set({});
          })
          .then(() => {
            return res.status(201).json({ token });
          })
          .catch(err => {
            if (err.code === "auth/email-already-in-use") {
              return res.status(403).json({
                error: "Current email address is already registered."
              });
            } else {
              return res.status(403).json({ error: err.code });
            }
          });
      }
    });
};

// @route: /users/signIn
// @desc: Log in user
// @access: Public
exports.signIn = (req, res) => {
  const userCredentials = {
    email: req.body.email,
    password: req.body.password
  };

  const { validateSignInData } = require("../utils/validators");
  const { errors, valid } = validateSignInData(userCredentials);

  if (!valid) return res.status(400).json({ errors });

  firebase
    .auth()
    .signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.status(200).json({ token });
    })
    .catch(err => {
      if (err.code === "auth/wrong-password") {
        return res
          .status(400)
          .json({ error: "Wrong user credentials, please try again." });
      }
      return res.status(400).json({ error: err.code });
    });
};
