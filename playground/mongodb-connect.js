const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do', 
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo.', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Raluca Botas', 
        age: 30, 
        location: 'Brasov'
    }, (err, result) =>{
        if(err){
            return console.log('Unable to insert user into db.', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});