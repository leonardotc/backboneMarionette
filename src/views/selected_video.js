import { View } from 'backbone.marionette'
import _ from 'underscore'
import template from './templates/selected_video.jst'

const SelectedVideoView = View.extend({
  template: template,
})

export default SelectedVideoView