const mongoose = require(`mongoose`);
const jokeSchema = new mongoose.Schema({
    nickName: String,
    joke: String,
    status:String,
});

const Joke = mongoose.model('JokeModel', jokeSchema);
module.exports = Joke;