const mongoose = require('mongoose');

const dburi = require('./settings').dburi;

// MongoDB and Mongoose
const dbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = () => {
  mongoose.connect(dburi, dbOptions);

  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB!');
  });

  mongoose.connection.on('error', (err) => {
    console.log('MongDB connection error: ', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB connection was disconnected...');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Closeing MongoDB connection due to application termination.');
      process.exit();
    });
  });
}


// **************When running server it does not loganything related to MongoDB *************************