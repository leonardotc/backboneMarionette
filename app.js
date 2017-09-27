const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const _ = require('underscore')
const keys = require("./config/index")

const YOUTUBE_API_KEY = keys.YOUTUBE_API_KEY
const TWITCH_CLIENT_ID = keys.TWITCH_CLIENT_ID

app.use(express.static("build"))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3"
const TWITCH_URL = "https://api.twitch.tv/kraken"

app.get("/api/videos/twitch/:channel", (req, res) => {

  const params = [
    ['client_id', TWITCH_CLIENT_ID]
  ]

  const query_string = 
    _.map(params, (param) => param.join("="))
    .join("&")

    console.log(`${TWITCH_URL}/channels/${req.params.channel}/videos?${query_string}`)

  axios.get(`${TWITCH_URL}/channels/${req.params.channel}/videos?${query_string}`)
    .then(({data}) => res.send(data))

})

// TODO: Refactor
app.get("/api/videos/youtube/channel/:channel", (req, res) => {
  
  // TODO: Check the parts
  const parts = ["snippet"]
  const params = [
    ['channelId', req.params.channel],
    ['key', YOUTUBE_API_KEY],
    ['type', 'video'],
    ['part', parts.join(",")]
  ]

  const query_string = 
    _.map(params, (param) => param.join("="))
    .join("&")

  axios.get(`${YOUTUBE_URL}/search?${query_string}`)
  .then(({data}) => res.send(data))
})

app.get("/api/videos/youtube/:id", (req, res) => {

  // TODO: Check the parts
  const parts = ["snippet", "contentDetails" , "statistics", "status"]
  const params = [
    ['id', req.params.id],
    ['key', YOUTUBE_API_KEY],
    ['part', parts.join(",")]
  ]

  const query_string = 
    _.map(params, (param) => param.join("="))
    .join("&")

  axios.get(`${YOUTUBE_URL}/videos?${query_string}`)
    .then(({data}) => res.send(data))
})

app.listen(5000, () => console.log("listening..."))