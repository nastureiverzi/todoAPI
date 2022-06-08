const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b7acc5e6af170005adbdfb5')
    // }, {
    //    $set: {
    //        completed: true
    //    } 
    // }, {
    //     returnOriginal: false
    // }). then((res) =>{
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b7abf6980c0052c9c0bc311')
    }, {
            $set: {
                name: 'Raluca'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        });

    //client.close();
});