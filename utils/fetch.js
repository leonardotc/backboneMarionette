const axios = require('axios')
const _ = require('underscore')

module.exports = {
  get: (url, params) => 
    axios
      .get(url, { params })
      .then(({ data }) => data)
}