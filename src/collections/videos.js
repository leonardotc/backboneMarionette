import _ from 'underscore'
import { Collection } from 'backbone'
import Video from '../models/video'
import Routes from '../config/routes'

const Videos = Collection.extend({
  model: Video,
  
  initialize({ channelId }) {
    this.channelId = channelId
    this.url = `${Routes.videosChannelPath()}/${this.channelId}`
  },

  parse: ({items}) => {
    
    return _.map(items, (item) => Object.assign(item, {id: item.id.playlistId}))
  }
})

export default Videos