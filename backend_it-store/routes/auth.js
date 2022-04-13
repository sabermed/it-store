const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if ((!req.body.username) || (!req.body.email) || (!req.body.password)) {
    res.status(403).json({success: false, msg: 'Enter all fields'})
  } else if(!emailRegexp.test(req.body.email)){
    res.status(403).json({success: false, msg: 'Enter correct email address'})
  } else {
    var newUser = User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    
    User.findOne({
      email: req.body.email
    }, function (err, user) {
      if (err) throw err
      if (!user) {
        newUser.save(function (err, newUser) {
          if (err) {
            res.status(403).json({success: false, msg: 'Failed to save'})
          }
          else {
            res.status(200).json({success: true, msg: 'Successfully saved'})
          }
        })
      } else {
        res.status(403).json({success: false, msg: 'Already registred with this email!'})  
      }
    }
    )
  }
});

//LOGIN

router.post('/login', async (req, res) => {

  if ((!req.body.email) || (!req.body.password)) {
    res.status(403).json({success: false, msg: 'Enter all fields',token: ''})
  } else {
    User.findOne({
    email: req.body.email
    }, function (err, user) {
      if (err) throw err
      if (!user) {
        res.status(404).json({success: false, msg: 'User not found',token: ''})
      } else {
        const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const inputPassword = req.body.password;
        if (originalPassword != inputPassword) {
          res.status(401).json({success: false, msg: 'Wrong Password',token: ''});
        } else {
          const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
          }, process.env.JWT_SECRET, { expiresIn: "3d" });
          
          const { password, ...others } = user._doc;  
          res.status(200).json({ ...others, accessToken });
        }
      }
    }
  )}
});

module.exports = router;
