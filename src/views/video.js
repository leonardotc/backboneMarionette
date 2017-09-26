import Bb from 'backbone'
import { View } from 'backbone.marionette'
import _ from 'underscore'
import template from './templates/video.jst'

const VideoView = View.extend({
  template: template,
  tagName: 'li',

  events: {
    'click a': 'log'
  },

  log(e) {
    e.preventDefault()
    Bb.history.navigate(`${Bb.history.getFragment()}/video/${this.model.id}`, {trigger: true});
  }

})

export default VideoView