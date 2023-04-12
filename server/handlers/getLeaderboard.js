const request = require('request-promise');

const getLeaderboard = (req, res) => {
  // deconstruct our values so we can spread them where
  // where they need to be in the api url.
  const track = req.query.track
  const stage = req.query.stage
  const car = req.query.car
  let skip = Number(req.query.skip)
  let take = Number(req.query.take)

  // get our leaderboard according to the track, stage and car selected in the frontend.
  return request(`https://hub.shutokorevivalproject.com/api/timing/leaderboard?track=${track}&stage=${stage}&car=${car}&skip=${skip}&take=${take}`)
  .then((response) => JSON.parse(response))
  .then((data) => {
    res.status(200).json({ status: 200, data })
  })
  .catch((error) => {
    console.log(error.message)
    res.status(400).json({ status: 400, message: `something went wrong ${error.message}`})
  })
}

module.exports = { getLeaderboard };