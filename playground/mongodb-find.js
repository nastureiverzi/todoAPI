const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // });

    // db.collection('Todos').count().then((count) =>{
    //     console.log(`Todos count:${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // });

     db.collection('Users').find({name: 'George'}).toArray().then((docs) =>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users.', err);
    });

    //client.close();
});