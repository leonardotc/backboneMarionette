import { history } from 'backbone'
import { View } from 'backbone.marionette'
import _ from 'underscore'
import template from './templates/video.jst'

const VideoView = View.extend({
  template: template,
  tagName: 'li',

  events: {
    'click a': 'showVideo'
  },

  showVideo(e) {
    e.preventDefault()
    history.navigate(`channel/${this.model.collection.channelId}/video/${this.model.id}`, 
      { trigger: true })
  }

})

export default VideoView