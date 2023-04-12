const request = require('request-promise');

const getAsia1Server = (req, res) => {
  return request("http://15.235.162.98:8081/api/details")
  .then((response) => JSON.parse(response))
  .then((data) => {
    res.status(200).json({ status: 200, data })
  })
  .catch((error) => {
    console.log(error.message)
    res.status(400).json({ status: 400, data, message: `something went wrong ${error.message}`})
  })
}

module.exports = { getAsia1Server };