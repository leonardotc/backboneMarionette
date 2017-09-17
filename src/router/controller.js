import { Object } from 'backbone.marionette'
import Video from '../models/video'
import Videos from '../collections/videos'

const Controller = Object.extend({

  showRoot() {
    console.log("test it")
  },
  showVideo(id) {
    const video = new Video({id: '2LtGZJvbjTQ'})
    video.fetch().then((content) => console.log(video))
  },
  showVideos(channelId) {
    const videos = new Videos({id: 'UCWRbcEYuQc1Jcl3Wyu6f9sw'})
    videos.fetch().then((content) => console.log("videos", videos))
  }

})

export default Controller