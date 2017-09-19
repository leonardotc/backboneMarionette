const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const _ = require('underscore')
const API_KEY = require("./config/index").API_KEY

app.use(express.static("build"))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3"

// TODO: Refactor
app.get("/api/videos/youtube/channel/:channel", (req, res) => {
  
  // TODO: Check the parts
  const parts = ["snippet"]
  const params = [
    ['channelId', req.params.channel],
    ['key', API_KEY],
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
    ['key', API_KEY],
    ['part', parts.join(",")]
  ]

  const query_string = 
    _.map(params, (param) => param.join("="))
    .join("&")

  axios.get(`${YOUTUBE_URL}/videos?${query_string}`)
    .then(({data}) => res.send(data))
})

app.listen(5000, () => console.log("listening..."))