require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const dbName = 'srp'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(MONGO_URI, options)

const updateUserFavorites = async (req, res) => {
  // get the user's id and favorite
  const favoriteString = req.body
  try {
    await client.connect()
    console.log('connected')

    const db = client.db(dbName)
    //find the matching user in the database.
    const user = await db.collection('users').findOne({ _id: favoriteString.user_id})
    const userFavoriteServers = user.favoriteServers

    // if the favorited server is not in the user's already favorited server's, add it to his favorite server's array.
    if(!user.favoriteServers.find((server) => server.serverName === favoriteString.serverName)) {
      const favoriteServersQuery = { 'favoriteServers': user.favoriteServers }
      const addNewFavoriteServer = { $set: { favoriteServers: [...userFavoriteServers, {serverName: favoriteString.serverName, serverApiUrl: favoriteString.serverApiUrl, serverLink: favoriteString.serverLink}]} }
      const newFavoriteServer = await db.collection('users').updateOne(favoriteServersQuery, addNewFavoriteServer)
      // get the newly updated user and send it back to the front end to be stored in a state to update
      // the user's list of favorite servers.
      const updatedUser = await db.collection('users').findOne({ _id: favoriteString.user_id})
      res.status(200).json({ status: 200, message: 'new server favorited.', data: updatedUser})
      client.close();
      console.log('disconnected')
    }
    // if favorited server is in the user's favorite server's array, remove it.
    // and send the updated user back to the frontend to update their list of favorite servers.
    else {
      const favoriteServersQuery = { 'favoriteServers': user.favoriteServers }
      const fav = user.favoriteServers.filter((lm) => lm.serverName !== favoriteString.serverName)
      const removeFavoritedServer = { $set: { favoriteServers: fav} }
      await db.collection('users').updateOne(favoriteServersQuery, removeFavoritedServer)
      const updatedUser = await db.collection('users').findOne({ _id: favoriteString.user_id})
      res.status(200).json({ status: 200, message: 'server removed from favorites.', data: updatedUser })
      client.close();
      console.log('disconnected')
    } 
  }
  catch(error) {
    res.status(400).json({ status: 400, message: "Something went wrong"})
    client.close()
  }
}

module.exports = { updateUserFavorites }