const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b7b06535da12512d8f74531';

Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) =>{
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) =>{
    console.log('Todo', todo);
});