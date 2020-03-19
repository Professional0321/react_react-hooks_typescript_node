const mongoose = require('mongoose');

const CollectionItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const CollectionItem = mongoose.model('CollectionItem', CollectionItemSchema);
exports.CollectionItem = CollectionItem;