import { View } from 'backbone.marionette'
import _ from 'underscore'

const VideoView = View.extend({
  template: _.template("<div><embed src='<%- url  %>' /></div>"),
  
})

export default VideoView