const bcrypt = require("bcrypt");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const auth = require("../../middleware/auth.middleware");
const { User, validate } = require("../../models/user.model");
const validateSignUpInput = require('../../middleware/auth/signup.middleware');
const validateLoginInput = require('../../middleware/auth/login.middleware');


const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route for ecommerce" }));

// router.get("/current", auth, async (req, res) => {
//   const user = await (User.findById(req.user._id)).select("-password");
//   res.send(user);
// })

router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    _id: req.user.id,
    displayName: req.user.displayName,
    email: req.user.email
  })
})

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignUpInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          newUser.password = hash;
          newUser.save().then(user => {
            const payload = {
              id: user.id,
              displayName: user.displayName,
              email: user.email
            }

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            });
          })
        })
      })
    }
  }).catch(error => console.log(error))
})

router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({email: "This user doesn't exist!"})
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, displayName: user.displayName, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 }, //expires in one hour
          (error, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        )
      } else {
        return res.status(400).json({ password: 'Incorrect Password'})
      }
    })
  })
})

// router.post("/", async (req, res) => {

//   // validate request body first
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   // find an exisiting user
//   let user = await User.findOne({email: req.body.email});

//   if (user) return res.status(400).send("User already registered");

//   user = new User({
//     displayName: req.body.displayName,
//     email: req.body.email,
//     password: req.body.password
//   })

//   user.password = await bcrypt.hash(user.password, 10);
//   await user.save();

//   const token = user.generateAuthToken();
//   res.header("x-auth-token", token).send({
//     _id: user._id,
//     displayName: user.displayName,
//     email: user.email
//   });
// })

module.exports = router;