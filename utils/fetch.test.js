const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const fetch = require('./fetch')


describe('fetch', () => {

  const url = "/someUrl"
  const params = {
    param1: 'value1',
    param2: 'value2'
  }

  it('it is defined', () => {
    expect(fetch).toBeDefined()
  })

  it('returns a promise', () => {
    let mock = new MockAdapter(axios)

    mock.onGet(url, { params })
      .reply(200, 'banana' )

    fetch
      .get(url, params)
      .then( data => expect(data).toEqual('banana'))
  })

})
