import { Model } from 'backbone'
import Routes from '../config/routes'
import _ from 'underscore'

const Video = Model.extend({
  urlRoot: Routes.videoPath,

  parse: (data) => data.hasOwnProperty('items') ?
    _.extend(data.items[0], { url: `http://www.youtube.com/watch?v=${data.items[0].id}` }) :
    _.extend(data, { url: `http://www.youtube.com/watch?v=${data.id}` })
})

export default Video