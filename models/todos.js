
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: String,
   checked: Boolean,
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
   
  
});

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
});


/// control d 
const Todo = mongoose.model('User', userSchema);

module.exports = Todo;