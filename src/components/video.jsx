import React from "react"
const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="video"
style={{
    display: (videoSrcURL!="") ? "block" : "none",
}}>
    <iframe
    src={`https://www.youtube.com/embed/`+videoSrcURL+`?autoplay=1&controls=0&modestbranding=1&enablejsapi=1&playlist=`+videoSrcURL+`&loop=1`}
    title={videoTitle}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    ></iframe>
    <div id="cover"></div>
  </div>
)
export default Video
