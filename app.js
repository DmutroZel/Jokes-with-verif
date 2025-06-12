const express = require(`epxress`);
const app = express();
require(`dotenv`).config();
const PORT = process.env.PORT;
const bodyParser = require(`body-parser`);
const path = require(`path`);
const mongoose = require(`mongoose`);
const jokeModel = require(path.join(__dirname, `/midlleware/jokeModel`));

app.use(express.static(path.join(__dirname, `public`)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URI)
.then(
    console.log(`connected to MongoDB`)
)
.catch((err) => {
    console.log(`cannot connect to MongoDB`, err)
})

app.get(`/`, (req, res) => {
     res.sendFile(path.join(__dirname, `/public`, `/index.html`))
});

app.post(`/sendJoke/:check`, (req, res) => {
    const {joke, nick} = req.body;

    savedJoke = mongoose.jokeModel({
        nickName:nick,
        joke:joke,
        status: `await`,
    });
    savedJoke.save();
});


app.post(`/verifJoke/:check`, (req, res) => {
    const {joke, nick} = req.body;
    const check = req.body.params;
    if(check == `t`){
        jokeModel.updateOne({joke:joke, nickName:nick}, {status:`verify`});
        res.send(`succesfully verified`);
    } else {
        jokeModel.deleteOne({joke:joke, nickName:nick, status:`await`},);
        res.send(`succesfully declined`);
    }
});

app.get(`/getNotVerifJokes/`, async(req, res) => {
    const jokes = await jokeModel.find({status:`await`});
    res.json(jokes);
})

app.get(`/getRandJoke`, async(req, res) => {
  const randomJoke = await jokeModel.aggregate([
    { $sample: { size: 1 } }
  ]);
  res.json(randomJoke[0]);
})

app.listen(PORT, () => {
    console.log(`server is running on PORT${PORT}`)
});