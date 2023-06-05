const mongoose = require('mongoose');

const UserPreferenceSchema = new mongoose.Schema({
  selectedValueradio: String,
  selectedValue: String,
  selectedProduct: [String],
  flowValue: Number,
  pmsValue: String,
  moodValue: String,
  birthControl: String,
  reproductiveDisorders: String
});

const UserPreference = mongoose.model('UserPreference', UserPreferenceSchema);

module.exports = UserPreference;
