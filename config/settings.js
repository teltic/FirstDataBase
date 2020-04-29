const dbname = 'firstdb';

module.exports = {
  port: 3000,
  dbname,
  appName: 'D&D Character Tracker',
  dburi: `mongodb+srv://${process.env.username}:${process.env.password}@helio-zte6t.mongodb.net/${dbname}?retryWrites=true&w=majority`,
};