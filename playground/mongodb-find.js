//const MongoClient = require('mongodb').MongoClient;

const {
  MongoClient,
  ObjectID
} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect');
  }
  console.log("connected to server");
  const db = client.db('TodoApp');

//   db.collection('Todos').find({
//     _id: new ObjectID('5ab92800066df78c5b3c54b0')
//   }).toArray().then((docs) => {
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log("Unable to fetch", err);
//   });

db.collection('Users').find({name:'Adam'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs, undefined, 2));
});



  //client.close();
});
