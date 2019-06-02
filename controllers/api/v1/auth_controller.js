const auth_controller = require('express').Router();
const User            = require('../../../models/user');
const jwt             = require('jsonwebtoken');
const bcrypt          = require('bcryptjs');
const validation      = require('../../../validations/validation');

//REGISTER
auth_controller.post('/register', async (req, res) => {

  //LETS VALIDATE THE DATA BEFORE WE STORE THE USER
  const { error } = validation.registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the user is already in the database
  const emailExist = await User.findOne({
    email: req.body.email
  });
  if (emailExist) return res.status(400).send('Email already taken');

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.send({user: user._id});
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
auth_controller.post('/login', async (req, res) => {
  const { error } = validation.loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //USER IS EXIST
  const user = await User.findOne({
    email: req.body.email
  });
  if (!user) return res.status(400).send('Email not registered');
  
  //PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Not Authorized');

  //Create and assign a token
  const token = jwt.sign({
    _id: user._id
  }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
});

module.exports = auth_controller;