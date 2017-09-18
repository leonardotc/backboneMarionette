import { Model } from 'backbone'
import Routes from '../config/routes'
import _ from 'underscore'

const Video = Model.extend({
  urlRoot: Routes.videoPath,

  parse: (data) => data.hasOwnProperty('items') ?
    _.extend(data.items[0], { url: `http://www.youtube.com/v/${data.items[0].id}` }) :
    data
})

export default Video