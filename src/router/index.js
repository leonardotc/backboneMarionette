import { AppRouter } from 'backbone.marionette'
import Controller from './controller.js'

const Router = AppRouter.extend({
  controller: new Controller(),

  appRoutes: {
    'channel/:channelId': 'showVideos',
    'videos/:id': 'showVideo',
    '':'showRoot'
  }
})

export default Router