require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.MONGO_URI,
    {useNewUrlParser: true},
)
    .then(() => console.log('connected to MongoDB!'))
    .catch((e) => console.log(e.message));
