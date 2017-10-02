const axios = require('axios')
const _ = require('underscore')
const keys = require("../config/index")

const fetchVideos = (params, baseUrl) => {

  const query_string = 
    _.map(params, (param) => param.join("="))
    .join("&")

  return axios.get(`${baseUrl}?${query_string}`)
    .then(({data}) => data)
}

const youtube = {
  key: keys.YOUTUBE_API_KEY,
  url: "https://www.googleapis.com/youtube/v3",
  params: [
    ['channelId', req.params.channel],
    ['key', this.key],
    ['type', 'video'],
    ['part', this.parts.join(",")]
  ]
}

const twitch = {
  key: keys.TWITCH_CLIENT_ID,
  url: "https://api.twitch.tv/kraken",
  params: [
    ['client_id', this.key]
  ],
  fetch: () => {
    return fetchVideos(params, 
      `${this.url}/channels/${this.channel}/videos`)
      .then(videos => this.mapToCanonical(videos))
  },
  mapToCanonical: (videos) => {

  }
}

module.exports = (app) => {

  const YOUTUBE_API_KEY = keys.YOUTUBE_API_KEY
  const TWITCH_CLIENT_ID = keys.TWITCH_CLIENT_ID


  app.get("/api/videos/twitch/:channel", (req, res) => {

    const params = [
      ['client_id', TWITCH_CLIENT_ID]
    ]



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

    const videos = await fetchVideos(params, 
      `${YOUTUBE_URL}/search`)
      .then(videos => res.send(videos))
  })

  app.get("/api/videos/youtube/:id", (req, res) => {

    // TODO: Check the parts
    const parts = ["snippet", "contentDetails" , "statistics", "status"]
    const params = [
      ['id', req.params.id],
      ['key', YOUTUBE_API_KEY],
      ['part', parts.join(",")]
    ]

    const videos = await fetchVideos(params, 
      `${YOUTUBE_URL}/videos`)
      .then(videos => res.send(videos))
  })

}