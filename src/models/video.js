import { Model } from 'backbone'
import Routes from '../config/routes'

const Video = Model.extend({
  urlRoot: Routes.videoPath,

  parse: ({items}) => items[0]

})

export default Video