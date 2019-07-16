const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator/check')

const User = require('../../models/User')

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    // run check function with a custom message
    check('name', 'Name is required')
      // make sure it's not empty
      .not()
      .isEmpty(),
    // email validation
    check('email', 'Please include a valid email').isEmail(),
    // password validation
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    // if there are errors
    if (!errors.isEmpty()) {
      // send a bad request with a specific error message
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
      // check if user already exists
      // search by email
      let user = await User.findOne({ email })
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] })
      }

      // get user's gravater which is based on the email
      const avatar = gravatar.url(email, {
        // default size
        s: '200',
        // default rating
        r: 'pg',
        // default image
        d: 'mm'
      })

      user = new User({
        name,
        email,
        avatar,
        password
      })

      // encrypt password using bcrypt
      // create a salt to do the hashing
      const salt = await bcrypt.genSalt(10)
      // hash the password, create a hash
      user.password = await bcrypt.hash(password, salt)
      // save user to the database
      await user.save()

      // return jsonwebtoken use that token to authenticate and access protected routes
      const payload = {
        user: {
          id: user.id
        }
      }
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        // options: expires in 3600s, change after testing
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )

    //  res.send('User registered')
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

module.exports = router
