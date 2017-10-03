module.exports = (app) => {

  // TODO: Refactor
  app.get("/api/videos/:channel", (req, res) => {
    // TODO: Build route

  })

  app.get("/api/videos/youtube/:id", (req, res) => {

    // TODO: Check the parts
    const parts = ["snippet", "contentDetails" , "statistics", "status"]
    const params = [
      ['id', req.params.id],
      ['key', YOUTUBE_API_KEY],
      ['part', parts.join(",")]
    ]

    fetchVideos(params, 
      `${YOUTUBE_URL}/videos`)
      .then(videos => res.send(videos))
  })

}