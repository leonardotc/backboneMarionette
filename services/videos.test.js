const channelService = require('./videos')
const keys = require("../config/index")

describe('createYoutubeChannel', () => {

  it('returns a function', () => {
    expect(youtubeChannelService).toBeDefined()
  })

})

describe('createTwitchChannel', () => {

  const createTwitchChannel = channelService.createTwitchChannel('some_channel')

  it('returns a function', () => {
    expect(createTwitchChannel).toBeDefined()
  })
})