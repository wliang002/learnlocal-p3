const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  // a referrence to the user model, every profile is associated with a user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  titles: {
    type: String
  },
  location: {
    type: String
  },
  skills: {
    type: [String]
  },
  website: {
    type: String
  },
  bio: {
    type: String
  },
  events: [
    {
      teachersName: {
        type: String,
        required: true
      },
      eventName: {
        type: String,
        required: true
      },
      eventType: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      eventDate: {
        type: Date,
        required: true
      },
      eventTime: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
