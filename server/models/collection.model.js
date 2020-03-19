const mongoose = require('mongoose');
const CollectionItem = require('./collection-item.model');

const Collection = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  routeName: {
    type: String,
    required: true
  },
  items: [ CollectionItem ]
});

exports.Collection = Collection;