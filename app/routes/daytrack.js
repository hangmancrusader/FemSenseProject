const express = require('express');
const router = express.Router();
const DayTrack = require('../../models/daytrack');
router.use(express.json());
// Create a new daytrack entry
router.post('/symptomadd/:id', async (req, res) => {
  const daytrack = await DayTrack.findById( req.params.id);
  daytrack.Symptoms.push(req.body.symptom);
  await daytrack.save();
  res.send(daytrack);

  res.send(daytrack);
});
router.post('/addtrack', async (req, res) => {
  try {
    const daytrack = new DayTrack(req.body);
    await daytrack.save();
    res.status(201).send(daytrack);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all daytrack entries
router.get('/', async (req, res) => {
  try {
    const daytracks = await DayTrack.find();
    res.send(daytracks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a specific daytrack entry by ID
router.get('/:id', async (req, res) => {
  try {
    const daytracks = await DayTrack.find({ userID: req.params.id });
    if (daytracks.length === 0) {
      return res.status(404).send('No day tracks found for the user');
    }
    res.send(daytracks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a specific daytrack entry by ID
router.patch('/update/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['water_amount', 'weight', 'Sleep', 'BodyTemp', 'Mood', 'Symptoms', 'Physical_Activity', 'Medicine'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const daytrack = await DayTrack.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!daytrack) {
      return res.status(404).send('Daytrack not found');
    }
    res.send(daytrack);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a specific daytrack entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const daytrack = await DayTrack.findByIdAndDelete(req.params.id);
    if (!daytrack) {
      return res.status(404).send('Daytrack not found');
    }
    res.send(daytrack);
  } catch (err) {
    res.status(500).send(err);
  }
});


// Define an API to push a new ID to the physical_activity array
router.post('/physical_activity/:id', async (req, res) => {
  const daytrack = await DayTrack.findById( req.params.id);
  daytrack.Physical_Activity.push(req.body.physical_activity);
  await daytrack.save();
  res.send(daytrack);
});

// Define an API to push a new ID to the mood array
router.post('/mood/:id', async (req, res) => {
  const daytrack = await DayTrack.findById( req.params.id);
  daytrack.Mood.push(req.body.mood);
  await daytrack.save();
  res.send(daytrack);

  res.send(daytrack);
});

router.get('/getsymp/:id', async (req, res) => {
  const daytrackId = req.params.id;

  try {
    const daytrack = await DayTrack.findById(daytrackId).populate('Symptoms');
    const symp=daytrack.Symptoms;
    
    res.json(daytrack.Symptoms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve daytrack and symptoms.' });
  }
  
});

router.get('/getmood/:id', async (req, res) => {
  const daytrackId = req.params.id;

  try {
    const daytrack = await DayTrack.findById(daytrackId).populate('Mood');
    const symp=daytrack.Mood;
    
    res.json(daytrack.Mood);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve daytrack and mood.' });
  }
  
});

module.exports = router;