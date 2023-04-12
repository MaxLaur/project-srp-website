require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const dbName = 'srp'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// find or add user to the database and send it back to the front end
const addUser = async (req, res) => {
  const user = req.body
  console.log(user)
  // shape of user object sent to Mongo.
  const dbUserObject = {
    _id: user.email,
    favoriteServers: [],
    favoriteCars: []
  }

  const client = new MongoClient(MONGO_URI, options)
  try {
    await client.connect()
    console.log('connected')
    const db = client.db(dbName)
    // search for the user in the database
    const foundUser = await db.collection('users').findOne({_id: dbUserObject._id})
    //if user is already in the database, send back the found user object.
    if(foundUser) {
      res.status(200).json({ status: 200, message: 'User already in database', data: foundUser})
      client.close();
      console.log('disconnected')
    }
    // if user is not already in the db, insert the user and send back that user object
    else {
      const newUser = await db.collection('users').insertOne(dbUserObject)
      res.status(200).json({ status: 200, message: 'New user added to database', data: newUser})
      client.close();
      console.log('disconnected')
    }
  }
  catch(error) {
    console.log(error.message)
    res.status(400).json({ status: 400, message: error.message})
    client.close();
    console.log('disconnected')
  }
}

module.exports = { addUser }