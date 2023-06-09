const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
<<<<<<< HEAD
//import models
const User = require('../../models/user')//../parentdirectory../changeparentdir
=======
//const {authenticateToken}=require('../../Middleware/authmiddle');
//import models
const User = require('../../models/user')//../parentdirectory../changeparentdir
const handleErrors=(err)=>
{
   console.log(err.message,err.code);
   let errors={email:'',password:''};
   if(err.message.includes('user authentication failed'))
   {
    Object.values(err.errors).forEach(({properties})=>{
     errors[properties.path]=properties.message;
    });
   }
   return errors;
}

>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
router.post('/forget_password', authenticateToken,async (req, res) => {
    const {  oldPassword, newPassword } = req.body;
    const emm=req.user.email;
    // Check if the user exists
    const user = await User.findOne({ emm });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the old password is correct
    const isMatch = (user.password==oldPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Old password is incorrect' });
    }
  
    // Generate a new password hash using the 'bcrypt' module
 
  
    // Update the user's password in the database
    user.password = newPassword;
    await user.save();
  
    res.json({ message: 'Password updated successfully' });
  });
<<<<<<< HEAD
  router.delete('/delete_account',authenticateToken, async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Check if the password is correct
    const isMatch = await (user.password==password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    const emm = req.user.email;
    // Delete the user account from the database
    await User.findOneAndRemove({ email:emm }  )
       
  
    res.json({ message: 'Account deleted successfully' });
  });
  // Get user profile endpoint
router.get('/profile/:email',authenticateToken, async (req, res) => {
    const { email } = req.user.email;
  
    // Check if the user exists
    const user = await User.findOne({ email });
=======


  router.delete('/delete_account',authenticateToken, async (req, res) => {
    const userId = req.user.id
    console.log(userId)
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  // Get user profile endpoint
router.get('/profile',authenticateToken, async (req, res) => {
    const userid = req.user.id;
  
    // Check if the user exists
    const user = await User.findById(userid);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  console.log(user)
    // Return the user profile information
    res.json({
      firstname: user.first_name,
      lastname:user.last_name,
      email: user.email,
<<<<<<< HEAD
      phoneNumber: user.Phonenumber
=======
      phonenumber: user.phonenumber,
      dob:user.dob
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
    });
  });
  // Logout endpoint
router.post('/logout', authenticateToken,async (req, res) => {
<<<<<<< HEAD
    const { email } = req.user.email;
  
    // Check if the user exists
    const user = await User.findOne({ email });
=======
    const  userid = req.user.id;
  
    // Check if the user exists
    const user = await User.findById(userid);
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Clear the JWT token from the user document in the database
<<<<<<< HEAD
    user.token = '';
    await user.save();
    res.json({ message: 'Logout successful' });
  });
  // Sign-up endpoint
router.post('/signup', async (req, res) => {
=======
    //user.token = '';
    //await user.save();
    res.cookie('jwt','',{maxAge:1});
    res.json({ message: 'Logout successful' });
  });
  // Sign-up endpoint
  router.post('/signupadmin', async (req, res) => {
    const { email, password, first_name, last_name,phonenumber, dob } = req.body;
  
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
  
    // Hash and salt the password before saving it to the database
    const saltRounds = 10; // Number of salt rounds to use
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  
    // Create a new user document
    const newUser = new User({
      email,
      role_id: 1,
      password: hashedPassword,
      first_name,
      last_name,
      phonenumber,
      dob
    });
  
    // Save the new user document to the database
    try {
      const savedUser = await newUser.save();
      res.json({ message: 'Sign-up successful' });
    } catch (err) {
      const errors=handleErrors(err)
      res.status(400).json({ errors  });
    }
  });
  router.post('/signupadmin', async (req, res) => {
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
    const { email, password, first_name, last_name, Phonenumber, dob } = req.body;
  
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
  
    // Create a new user document
    const newUser = new User({
      email,
<<<<<<< HEAD
=======
      role_id:1,
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
      password,
      first_name,
      last_name,
      Phonenumber,
      dob
    });
  
    // Hash the password before saving it to the database
   
  
    // Save the new user document to the database
    try {
      const savedUser = await newUser.save();
      res.json({ message: 'Sign-up successful' });
    } catch (err) {
<<<<<<< HEAD
      res.status(500).json({ message: err.message });
    }
  });
  // Update user profile
router.put('/:id', async (req, res) => {
    const {  first_name, last_name, Phonenumber, dob } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        
        first_name,
        last_name,
        Phonenumber,
=======
      const errors=handleErrors(err)
      res.status(400).json({ errors  });
    }
  });
  // Update user profile
router.put('/updatedetails',authenticateToken, async (req, res) => {
  const  userid = req.user.id;
    const {  first_name, last_name, phonenumber, dob } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(userid, {
        
        first_name,
        last_name,
        phonenumber,
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
        dob
      }, { new: true });
      res.json(updatedUser);
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
<<<<<<< HEAD
  // Middleware function to authenticate JWT token of Tutor
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
=======
 // Middleware function to authenticate JWT token
function authenticateToken(req, res, next) {
    //const authHeader = req.headers['authorization'];
    //const token = authHeader && authHeader.split(' ')[1];
    const token =req.cookies.jwt;
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
    if (token == null) return res.status(401).json({ message: 'JWT token is required' });
  
    jwt.verify(token, 'secret', (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid JWT token' });
      req.user = user;
<<<<<<< HEAD
      next();
    });
  }
=======
      console.log(req.user)
      next();
    });
  }
 
  const Createtoken =(id,email)=>{
    const maxage=3*24*60*60;
   return jwt.sign({ id, email }, 'secret', { expiresIn: maxage });
  }
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
  // Login API
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    // Check if the password is correct
<<<<<<< HEAD
    const validPassword = (password== user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, 'secret', { expiresIn: '1h' });
  
    res.json({ token });
=======
    const validPassword = bcrypt.compare(password,user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    else
    {
    // Generate a JWT token
    const maxage=3*24*60*60;
    const token = jwt.sign({ id: user._id, email: user.email }, 'secret', { expiresIn: maxage });
    //const token=Createtoken(user._id,user.email)
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxage*1000});
    res.status(201).json({ user:user._id });
    }
>>>>>>> e4808a9e8ec38a96ff723550ea1020419e3e667e
  });
  
module.exports = router;