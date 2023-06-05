const express = require('express');
const User = require('../../models/user');
const UserPreference = require('../../models/userpreference');
const router = express.Router();

// POST API - Create user preference
router.post('/user-preference', async (req, res) => {
  try {
    const { userId, preferenceData } = req.body;

    // Verify user existence
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create user preference
    const userPreference = await UserPreference.create(preferenceData);

    // Associate user preference with the user
    user.preference = userPreference._id;
    await user.save();

    res.status(201).json({ message: 'User preference created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET API - Get user preference
router.get('/user-preference/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Verify user existence
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get user preference
    const userPreference = await UserPreference.findById(user.preference);
    if (!userPreference) {
      return res.status(404).json({ error: 'User preference not found' });
    }

    res.json({ preference: userPreference });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
