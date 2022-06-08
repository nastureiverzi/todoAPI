const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('ToDoApp');

    //    db.collection('Users').deleteMany({text: 'Eat lunch'}).then((res) =>{
    //         console.log(res);
    //    });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) =>{
    //         console.log(res);
    //    });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //     console.log(res);
    // });
    //client.close();
});