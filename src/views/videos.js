import { CollectionView } from 'backbone.marionette'
import _ from 'underscore'
import Video from './video.js'

const Videos = CollectionView.extend({
  childView: Video,
  tagName: 'ul'
})

export default Videos