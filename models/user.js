const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testapp1');
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    imageUrl: String
})

module.exports=mongoose.model('user', userSchema);