import { Object } from 'backbone.marionette'
import Video from '../models/video'
import Videos from '../collections/videos'
import VideoView from '../views/video'
import VideosView from '../views/videos'

const Controller = Object.extend({
  initialize(options) {
    this.app = this.getOption('app')
  },

  showRoot() {
    console.log("test it")
  },

  showVideo(id) {
    const video = new Video({id: '2LtGZJvbjTQ'})
    
    video.fetch().then(() => {
      const view = new VideoView({ model: video })
      this.app.showView(view)
    })
  },

  showVideos(channelId) {
    const videos = new Videos({ channelId })
    videos.fetch().then((content) => { 
      const view = new VideosView({ collection: videos})
      this.app.showView(view)
    })
  }

})

export default Controller