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

module.exports.createYoutubehChannel = (channel) => {
  return {
    _key: keys.YOUTUBE_API_KEY,
    _url: "https://www.googleapis.com/youtube/v3",
    _parts: ["snippet"],
    _params: [
      ['channelId', channel],
      ['key', this._key],
      ['type', 'video'],
      ['part', this._parts.join(",")]
    ],

    fetch: () => {
      fetchVideos(this._params, 
        `${this._url}/search`)
        .then(videos => this._mapToCanonical(videos))
    },

    _mapToCanonical: (videos) => {

    }
  }
}

module.exports.createTwitchChannel = (channel) => {
  return {
    _key: keys.TWITCH_CLIENT_ID,
    _url: "https://api.twitch.tv/kraken",
    _params: [
      ['client_id', this._key]
    ],

    fetch: () => {
      return fetchVideos(this._params, 
        `${this._url}/channels/${channel}/videos`)
        .then(videos => this._mapToCanonical(videos))
    },

    _mapToCanonical: (videos) => {

    }
  }
}