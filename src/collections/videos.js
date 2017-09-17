import { Collection } from 'backbone'
import Video from '../models/video'
import Routes from '../config/routes'

const Videos = Collection.extend({
  model: Video,
  url: Routes.videosChannelPath,
  initialize(options) {
    this.data = { channelId: options.data }
  }
})

export default Videos