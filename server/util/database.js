const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://christrinh:pushone123@crwn-clothing1-kozza.mongodb.net/test?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected to MongoDB...');
      callback(client);
    })
    .catch(error => {
      console.log("Could not connect to MongoDB...")
    })
};

module.exports = mongoConnect;