import { Object } from 'backbone.marionette'
import Video from '../models/video'
import Videos from '../collections/videos'
import VideoView from '../views/video'

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
    const videos = new Videos({id: 'UCWRbcEYuQc1Jcl3Wyu6f9sw'})
    videos.fetch().then((content) => console.log("videos", videos))
  }

})

export default Controller