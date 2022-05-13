const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/createUpdate/:id", /*verifyToken,*/ async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;
  
  const cartProduct = await Cart.findOne({ "userId": userId, "products.productId": productId },{ "products._id": 1,"products.productId": 1, "products.quantity": 1 });
  if (cartProduct != null) {
    console.log("mawjoud")
    const qteAction = parseInt(req.body.qteAction);
    let idItem = "";
    cartProduct.products.map((item, index) => {
      if (item.productId == productId) {
        idItem = item._id;
      }
    })
    Cart.updateOne(
      {"userId": userId, "products.productId": productId, "products._id": idItem},
      {
        $inc: {
          "products.$.quantity": qteAction
        }
      },
      function(err, model){
        if (err){
          console.log("ERROR: ", err);
          res.status(500).send(err);
        }else{
          res.status(200).send(model);
        }
      }
    );
  } else {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productImage = req.body.productImage;
    const quantity = req.body.quantity;
    console.log("not here")
    Cart.findOneAndUpdate(
      {"userId": userId},
      {
        $push: {
          "products": {
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
            quantity: quantity,
          }
        }
      },
      {safe: true, upsert: true, new: true},
      function(err, model){
        if (err){
          console.log("ERROR: ", err);
          res.status(500).send(err);
        }else{
          res.status(200).send(model);
        }
      }
    );
  }

});

//UPDATE
router.put("/update/:id", /*verifyTokenAndAuthorization,*/ async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.post("/delete/:id", /*verifyTokenAndAuthorization,*/ async (req, res) => {
  const userId = req.params.id;
  const prodId = req.body.productId;
  Cart.updateOne(
    {"userId": userId},
    {
      $pull: {
        "products": { "_id": prodId}
      }
    },
    function(err, model){
      if (err){
        console.log("ERROR: ", err);
        res.status(500).send(err);
      }else{
        res.status(200).send(model);
      }
    }
  );
});

//GET USER CART
router.get("/find/:id", /*verifyTokenAndAuthorization,*/ async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/findAll", /*verifyTokenAndAdmin,*/ async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
