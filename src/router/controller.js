import { Object } from 'backbone.marionette'
import Video from '../models/video'
import Videos from '../collections/videos'
import ChannelVideoView from '../views/channel_video'
import VideosView from '../views/videos'

const Controller = Object.extend({
  initialize(options) {
    this.app = this.getOption('app')
  },

  showRoot() {
    console.log("test it")
  },

  showVideo(channelId, id) {
    const video = new Video({ id })
    const videos = new Videos({ channelId })

    Promise.all([videos.fetch(), video.fetch()]).then(() => {
      const view = new ChannelVideoView({ collection: videos, model: video })
      this.app.showView(view)
    })
  },

  showVideos(channelId) {
    const videos = new Videos({ channelId })

    videos.fetch().then(content => {
      const view = new VideosView({ collection: videos })
      this.app.showView(view)
    })
  }

})

export default Controller