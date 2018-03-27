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


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aba481c8076f78b3b88cfaf')
  }, {
$set:{
  name:"Andrew",
},
$inc:{
  "Age":1
}
},{
  returnOriginal: false
}).then((results)=>{
  console.log(results);
});

  //client.close();
});
