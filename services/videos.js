const keys = require("../config/index")
const fetchVideos = require('../utils/fetch')

module.exports.createYoutubeChannel = (channel) => {
  const key = keys.YOUTUBE_API_KEY
  const url = "https://www.googleapis.com/youtube/v3"
  const parts = ["snippet"]
  const params = [
    ['channelId', channel],
    ['key', key],
    ['type', 'video'],
    ['part', parts.join(",")]
  ]

  const mapToCanonical = () => {}
  
  return {
    fetch: () => fetchVideos(params, `${url}/search`)
  }
}

module.exports.createTwitchChannel = (channel) => {
  const key = keys.TWITCH_CLIENT_ID
  const url = "https://api.twitch.tv/kraken"
  const params = () => [
    ['client_id', this._key]
  ]

  const mapToCanonical = () => {}

  return {
    fetch: () => fetchVideos(`${this._url}/channels/${channel}/videos`, params)
  }
}