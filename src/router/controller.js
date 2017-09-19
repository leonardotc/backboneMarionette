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
    const videos = new Videos({ channelId })
    videos.fetch().then((content) => { 
      //TODO: implement the view
      console.log(videos)
    })
  }

})

export default Controller