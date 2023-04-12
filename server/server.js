"use strict";

const express = require("express");
const morgan = require("morgan");

const { getUsEast1Server } = require("./handlers/getServer_handlers/getUSEast1")
const { getUsEast2Server } = require("./handlers/getServer_handlers/getUSEast2")
const { getUsEast3Server } = require("./handlers/getServer_handlers/getUSEast3")
const { getUsEast4Server } = require("./handlers/getServer_handlers/getUSEast4")
const { getUsEastPTBServer } = require("./handlers/getServer_handlers/getUSEastPTB")

const { getEur1Server } = require("./handlers/getServer_handlers/getEur1")
const { getEur2Server } = require("./handlers/getServer_handlers/getEur2")
const { getEur3Server } = require("./handlers/getServer_handlers/getEur3")
const { getEur4Server } = require("./handlers/getServer_handlers/getEur4")
const { getEurPTBServer } = require("./handlers/getServer_handlers/getEurPTB")

const { getAsia1Server } = require("./handlers/getServer_handlers/getAsia1")
const { getAsia2Server } = require("./handlers/getServer_handlers/getAsia2")
const { getAsia3Server } = require("./handlers/getServer_handlers/getAsia3")

const { getLeaderboard } = require("./handlers/getLeaderboard")

const { addUser } = require("./handlers/addUser")
const { updateUserFavorites } = require("./handlers/updateUserFavorites")

const port = 8888

express()
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.static("public"))

  // get us east servers.
  .get("/api/getUsEast1", getUsEast1Server)
  .get("/api/getUsEast2", getUsEast2Server)
  .get("/api/getUsEast3", getUsEast3Server)
  .get("/api/getUsEast4", getUsEast4Server)
  .get("/api/getUsEastPTB", getUsEastPTBServer)
  //get europe servers
  .get("/api/getEur1", getEur1Server)
  .get("/api/getEur2", getEur2Server)
  .get("/api/getEur3", getEur3Server)
  .get("/api/getEur4", getEur4Server)
  .get("/api/getEurPTB", getEurPTBServer)
  // get asia servers
  .get("/api/getAsia1", getAsia1Server)
  .get("/api/getAsia2", getAsia2Server)
  .get("/api/getAsia3", getAsia3Server)

  //get the leaderboard
  .get("/api/timing/leaderboard?", getLeaderboard)

  // login or add new user to database
  .post("/api/addUserOrLogin", addUser)
  // modify a user's favorite servers
  .patch("/api/updateUserFavorites", updateUserFavorites)

  // catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(port, () => console.log(`Listening on port ${port}`));
