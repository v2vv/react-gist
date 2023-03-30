const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://v2vvcn:lvhonyua@cluster0.1wnsyjn.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Connected successfully to remote database");

  // 在这里进行数据库操作
});
