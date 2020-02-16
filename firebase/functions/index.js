const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

// Warning!!!
// const { fix } = require("./handlers/fix");
// app.get("/fix", fix);

const { fbAuth } = require("./utils/fbAuth");
const {
  signUp,
  signIn,
  getCart,
  addToCart,
  updateProduct,
  removeProduct
} = require("./handlers/users");
app.post("/users/signUp", signUp);
app.post("/users/signIn", signIn);
app.get("/users/cart", fbAuth, getCart);
app.post("/users/cart", fbAuth, addToCart);
app.post("/users/cart/:productId", fbAuth, updateProduct);
app.delete("/users/cart/:productId", fbAuth, removeProduct);

const {
  getProducts,
  getProduct,
  addProduct,
  uploadPhoto_1,
  uploadPhoto_2,
  uploadPhoto_3
} = require("./handlers/products");
app.get("/products", getProducts);
app.get("/products/:productId", getProduct);
// Requires an admin permission only!
app.post("/products", addProduct);
app.post("/products/:productId/uploadPhoto_1", uploadPhoto_1);
app.post("/products/:productId/uploadPhoto_2", uploadPhoto_2);
app.post("/products/:productId/uploadPhoto_3", uploadPhoto_3);

exports.api = functions.region("europe-west2").https.onRequest(app);
