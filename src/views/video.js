import { View } from 'backbone.marionette'
import _ from 'underscore'

const VideoView = View.extend({
  template: _.template("<div><%- id  %></div>"),

  _videoURL: () => `http://www.youtube.com/v/${this.model.id}`
  
})

export default VideoView