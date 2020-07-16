const { db, storage } = require("../utils/admin")

// @route: /products
// @desc: Get all products
// @access: Public
exports.getProducts = (req, res) => {
  db.collection("products")
    .get()
    .then((data) => {
      let products = []
      data.forEach((doc) => {
        products.push({
          id: doc.id,
          product: doc.data(),
        })
      })
      return res.status(200).json(products)
    })
    .catch((err) => {
      return res.status(404).json({ error: err.code })
    })
}

// @route: /products/:productId
// @desc: Get a particular product
// @access: Public
exports.getProduct = (req, res) => {
  db.collection("products")
    .doc(req.params.productId)
    .get()
    .then((doc) => {
      return res.status(200).json(doc.data())
    })
    .catch((err) => {
      return res.status(404).json({ error: err.code })
    })
}

// @route: /products
// @desc: Add new product
// @acces: Private
exports.addProduct = (req, res) => {
  const newProduct = {
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    fabric: req.body.fabric,
    fit: req.body.fit,
    size: req.body.size || "",
    treatment: req.body.treatment,
    photo_1: "url",
    photo_2: "url",
    photo_3: "url",
  }
  db.collection("products")
    .add(newProduct)
    .then((doc) => {
      return res
        .status(201)
        .json({ message: `Product ${doc.id} was added successfuly.` })
    })
    .catch((err) => {
      return res.status(500).json({ error: err.code })
    })
}

// @route: /products/:productId/uploadPhoto_[1-3]
// @desc: Upoad images for a prticular product
// @acces: Private
function uploadAnImage(req, res, photo) {
  const BusBoy = require("busboy")
  const path = require("path")
  const os = require("os")
  const fs = require("fs")

  const busboy = new BusBoy({ headers: req.headers })

  let imageFileName
  let imageToBeUploaded = {}
  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    console.log(fieldname, filename, mimetype)
    if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
      return res.status(400).json({ error: "Wrong file type submitted" })
    }
    const imageExtension = filename.split(".")[filename.split(".").length - 1]
    imageFileName = `${Math.round(
      Math.random() * 1000000000
    )}.${imageExtension}`
    const filePath = path.join(os.tmpdir(), imageFileName)
    imageToBeUploaded = { filePath, mimetype }
    file.pipe(fs.createWriteStream(filePath))
  })
  busboy.on("finish", () => {
    storage
      .bucket()
      .upload(imageToBeUploaded.filePath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
          },
        },
      })
      .then(() => {
        const photoURL = `https://firebasestorage.googleapis.com/v0/b/lebonnet-0000.appspot.com/o/${imageFileName}?alt=media`
        return db
          .collection("products")
          .doc(req.params.productId)
          .update({ [photo]: photoURL })
      })
      .then(() => {
        return res.status(200).json({ message: "Image uploaded  successfuly." })
      })
      .catch((err) => {
        return res.status(500).json({ error: err.code })
      })
  })
  busboy.end(req.rawBody)
}
exports.uploadPhoto_1 = (req, res) => {
  uploadAnImage(req, res, "photo_1")
}
exports.uploadPhoto_2 = (req, res) => {
  uploadAnImage(req, res, "photo_2")
}
exports.uploadPhoto_3 = (req, res) => {
  uploadAnImage(req, res, "photo_3")
}
