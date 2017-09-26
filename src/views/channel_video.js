import { View } from 'backbone.marionette'
import _ from 'underscore'
import SelectedVideoView from '../views/selected_video'
import VideosView from '../views/videos'
import template from './templates/channel_video.jst'

const ChannelVideoView = View.extend({

  template: template,

  regions: {
    selectedVideo: '.selectedVideo',
    channelMenu: '.channelMenu',
  },

  onAttach() {

    const channelView = new VideosView({ collection: this.collection })
    this.showChildView('channelMenu', channelView)

    const selectedView = new SelectedVideoView({ model: this.model })
    this.showChildView('selectedVideo', selectedView)
  }

})

export default ChannelVideoView