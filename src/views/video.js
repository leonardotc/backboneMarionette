import { View } from 'backbone.marionette'
import _ from 'underscore'
import template from './templates/video.jst'

const VideoView = View.extend({
  template: template
})

export default VideoView