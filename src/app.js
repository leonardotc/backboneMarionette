import AppRouter from './router/index.js'
import { Application } from 'backbone.marionette'
import { history } from 'backbone'
import Routes from './config/routes'

const App = new Application({
  region: '#main-content',

  onStart(options) {
    this.router = new AppRouter({
      app: this
    })
    history.start()
  }

})

App.start({routes: Routes}) //fire this after loaded defaults from the backend