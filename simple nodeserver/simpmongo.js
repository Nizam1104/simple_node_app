const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/sampleDB', (err, db) => {
  if (err) throw err
  console.log(db)
})