import { AppRouter } from 'backbone.marionette'
import Controller from './controller.js'

const Router = AppRouter.extend({
  initialize(options) {
    this.controller = new Controller(this.options);
  },

  appRoutes: {
    'channel/:channelId': 'showVideos',
    'videos/:id': 'showVideo',
    '':'showRoot'
  }
})

export default Router