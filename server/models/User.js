const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const todoSchema = require('./Todo')

const userSchema = Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        default: 'USER'
    },
    todos: [todoSchema]
})

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  

  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  const User = model('User', userSchema);

  module.exports = User