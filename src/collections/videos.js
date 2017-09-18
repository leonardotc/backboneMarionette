import { Collection } from 'backbone'
import Video from '../models/video'
import Routes from '../config/routes'

const Videos = Collection.extend({
  model: Video,
  
  initialize({ channelId }) {
    this.channelId = channelId
    this.url = `${Routes.videosChannelPath()}/${this.channelId}`
  },

  parse: ({items}) => items
})

export default Videos