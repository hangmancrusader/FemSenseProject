const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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




  router.delete('/delete_account',authenticateToken, async (req, res) => {
    const userId = req.body.userid
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


  //deletewithparams
  router.delete('/deleteuser/:id', async (req, res) => {
    const userid = req.params.id
    console.log(userid)
    try {
      const user = await User.findByIdAndDelete(userid);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
//get all user
router.get('/allusers', authenticateToken, async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Return the user profiles information
    const userProfiles = users.map((user) => ({
      userid:user._id,
      username: user.name,
      email: user.email,
      phonenumber: user.phonenumber,
      dob: user.dob,
      roleid: user.roleid,
    }));

    res.json(userProfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



  // Get user profile endpoint
router.get('/profile/:id',authenticateToken, async (req, res) => {
    const userid = req.params.id
  
    // Check if the user exists
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  console.log(user)
    // Return the user profile information
    res.json({
      username: user.name,
      email: user.email,
      phonenumber: user.phonenumber,
      dob:user.dob,
      roleid:user.roleid
      
    });
  });
  // Logout endpoint
router.post('/logout', authenticateToken,async (req, res) => {
    const  userid = req.user.id;
  
    // Check if the user exists
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Clear the JWT token from the user document in the database
    //user.token = '';
    //await user.save();
    
    // res.cookie('jwt','',{maxAge:1});
    res.json({ message: 'Logout successful' });
  });
  // Sign-up endpoint
  router.post('/signupadmin', async (req, res) => {
    const { email, password, name,roleid } = req.body;
  
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
      password: hashedPassword,
      name,
      roleid,
    });
  
    // Save the new user document to the database
    try {
      const savedUser = await newUser.save();
      res.json({ message: 'Sign-up successful' , roleid:roleid});
    } catch (err) {
      const errors=handleErrors(err)
      res.status(400).json({ errors  });
    }
  });
  // router.post('/signupadmin', async (req, res) => {
  //   const { email, password, name,  } = req.body;
  
  //   // Check if the user already exists
  //   const existingUser = await User.findOne({ email });
  //   if (existingUser) {
  //     return res.status(409).json({ message: 'User already exists' });
  //   }
  
  //   // Create a new user document
  //   const newUser = new User({
  //     email,
  //     password,
  //     name,
  //   });
  
  //   // Hash the password before saving it to the database
   
  
  //   // Save the new user document to the database
  //   try {
  //     const savedUser = await newUser.save();
  //     res.json({ message: 'Sign-up successful' });
  //   } catch (err) {
  //     const errors=handleErrors(err)
  //     res.status(400).json({ errors  });
  //   }
  // });
  // Update user profile
router.put('/updatedetails',authenticateToken, async (req, res) => {
  const  userid = req.user.id;
    const {   name } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(userid, {
        
        name,
      }, { new: true });
      res.json(updatedUser);
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
 // Middleware function to authenticate JWT token
 function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'JWT token is required' });

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid JWT token' });
    req.user = user;
    next();
  });
}
  
 
  const Createtoken =(id,email)=>{
    const maxage=3*24*60*60;
   return jwt.sign({ id, email }, 'secret', { expiresIn: maxage });
  }
  // Login API
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }
  
    // Generate a JWT token
    const maxAge = 3 * 24 * 60 * 60;
    const token = jwt.sign({ id: user._id, email: user.email }, 'secret', { expiresIn: maxAge * 1000  });
    //  localStorage.setItem('jwt', token);
    //  localStorage.setItem('userid', user._id);
    res.status(201).json({ user: user._id, token, roleid:user.roleid});
  });
  
module.exports = router;