// Initial Example
// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID } = require ('mongodb');

// Object ID destructuring example
// var obj = new ObjectID();
// console.log(obj);

//Destructuring example
// var user = {name: 'Anish', age: 30};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //    if(err){
  //      return console.log('Unable to insert todo', err);
  //    }
  //    console.log(JSON.stringify(result.ops, undefined, 2));
  //    console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
