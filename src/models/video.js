import { Model } from 'backbone'
import Routes from '../config/routes'
import _ from 'underscore'

const Video = Model.extend({
  urlRoot: Routes.videoPath,

  parse: ({items}) => _.extend(items[0], { url: `http://www.youtube.com/v/${items[0].id}` }),

})

export default Video