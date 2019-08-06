const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator/check')
const Profile = require('../../models/Profile')
const User = require('../../models/User')

// @resources https://odino.org/async-slash-await-in-expressjs/
// @resources https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    )
    // check if there is no profile
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }

    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    POST api/profile
// @desc     Create or update a user profile
// @access   Private
router.post(
  '/',
  // middleware: auth, validation
  auth,
  async (req, res) => {
    const errors = validationResult(req)
    // if there are errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      location,
      titles,
      bio,
      skills,
      facebook,
      twitter,
      instagram
    } = req.body

    // Build profile object
    const profileFields = {}
    profileFields.user = req.user.id
    // if field is not empty, insert in profile obj
    if (location) profileFields.location = location
    if (titles) profileFields.titles = titles
    if (bio) profileFields.bio = bio
    // turn string into an array
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim())
    }

    // Build social object
    profileFields.social = {}
    if (twitter) profileFields.social.twitter = twitter
    if (facebook) profileFields.social.facebook = facebook
    if (instagram) profileFields.social.instagram = instagram

    // update & insert data
    try {
      let profile = await Profile.findOne({ user: req.user.id })

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        )

        return res.json(profile)
      }

      // Create
      profile = new Profile(profileFields)

      await profile.save()
      res.json(profile)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    // populate from user collection
    const profiles = await Profile.find().populate('user', ['name', 'avatar'])
    res.json(profiles)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar'])

    if (!profile) return res.status(400).json({ msg: 'Profile not found' })

    res.json(profile)
  } catch (err) {
    console.error(err.message)
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' })
    }
    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/profile
// @desc     Delete profile, user
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    // await Post.deleteMany({ user: req.user.id })
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id })
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id })

    res.json({ msg: 'User deleted' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// Add classes
// @route    PUT api/profile/events
// @desc     Add profile events
// @access   Private
router.put(
  '/events',
  [
    auth,
    [
      check('teachersName', 'Teachers name is required')
        .not()
        .isEmpty(),
      check('eventName', 'Event name is required')
        .not()
        .isEmpty(),
      check('eventType', 'Event type is required')
        .not()
        .isEmpty(),
      check('location', 'Location is required')
        .not()
        .isEmpty(),
      check('eventDate', 'Event Date is required')
        .not()
        .isEmpty(),
      check('eventTime', 'Event Time is required')
        .not()
        .isEmpty(),
      check('eventSize', 'Event Size is required')
        .not()
        .isEmpty(),
      check('description', 'Description is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      teachersName,
      eventName,
      eventType,
      location,
      geocode,
      eventDate,
      eventTime,
      eventSize,
      description
    } = req.body

    const newEvent = {
      teachersName,
      eventName,
      eventType,
      location,
      geocode,
      eventDate,
      eventTime,
      eventSize,
      description
    }

    try {
      // find a profile to add classes to
      const profile = await Profile.findOne({ user: req.user.id })
      // add new event on top
      profile.events.unshift(newEvent)

      await profile.save()

      res.json(profile)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// Sign up for classes
// @route    PUT api/profile//user/:user_id/events/:event_id
// @desc     Add student to event
// @access   Public
router.post(
  '/user/:user_id/events/:event_id',
  [
    check('studentsName', 'students name is required')
      .not()
      .isEmpty(),
    check('studentsEmail', 'email is required')
      .not()
      .isEmpty(),
    check('studentsPhone', 'phone is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      studentsName,
      studentsEmail,
      studentsPhone
    } = req.body

    const newStudent = {
      studentsName,
      studentsEmail,
      studentsPhone
    }

    try {
      const profile = await Profile.findOne({
        user: req.params.user_id
      })

      if (!profile) return res.status(400).json({ msg: 'Profile not found' })

      // res.json(profile)
      // // get the id of the class
      const eventIds = profile.events.map(event => event._id.toString())
      // // get the index of the class
      const eventIndex = eventIds.indexOf(req.params.event_id)
      // if the id doesn't exist
      if (eventIndex === -1) {
        return res.status(500).json({ msg: 'event not found' })
      } else {
        profile.events[eventIndex].students.unshift(newStudent)

        await profile.save()

        res.json(profile)
      }
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// delete a class
// @route    DELETE api/profile/events/:event_id
// @desc     Delete a class from profile
// @access   Private
router.delete('/events/:event_id', auth, async (req, res) => {
  try {
    // get the correct profile
    const foundProfile = await Profile.findOne({ user: req.user.id })
    // get the id of the class
    const eventIds = foundProfile.events.map(event => event._id.toString())
    // get the index of the class
    const removeIndex = eventIds.indexOf(req.params.event_id)
    // if the id doesn't exist
    if (removeIndex === -1) {
      return res.status(500).json({ msg: 'Server error' })
    } else {
      // remove the class from the array
      foundProfile.events.splice(removeIndex, 1)
      await foundProfile.save()
      return res.status(200).json(foundProfile)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Server error' })
  }
})

module.exports = router
