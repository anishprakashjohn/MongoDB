const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Fetching data based on one field
  db.collection('Todos').find({completed: false}).toArray().then ((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch todos',err)
  });

  //Fetching data based on ObjectID
  db.collection('Todos').find({
    _id: new ObjectID ('5a5d3fb0a6a3a41710c41109')
  }).count().then ((count)=>{
    console.log(`Todos count: ${count}`);

  }, (err)=>{
    console.log('Unable to fetch todos',err)
  });



  db.close();

});
