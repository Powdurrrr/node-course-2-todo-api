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

// //delete many
// db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
//   console.log(result);
// })
// //delete one

// db.collection('Todos').deleteOne({text:'eat lunch'}).then((results)=>{
//   console.log(results);
// });





//
// //findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });

//
// db.collection('Users').deleteMany({name:'Adam'}).then((results)=>{
//   console.log(results);
// });


db.collection('Users').findOneAndDelete({_id:new ObjectID('5aba48068076f78b3b88cfa5')}).then((result)=>{
console.log(result);
});




  //client.close();
});
