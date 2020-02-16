const { db } = require("../utils/admin");

exports.fix = (req, res) => {
  db.collection("products")
    .get()
    .then(data => {
      let ids = [];
      data.forEach(doc => {
        ids.push(doc.id);
      });
      ids.forEach(id => {
        db.collection("products")
          .doc(id)
          .update({ size: "" });
      });
      return res.status(200).json({ message: "Good!" });
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};
