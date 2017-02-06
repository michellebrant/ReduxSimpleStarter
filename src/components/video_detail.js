import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>
    //this solves the problem outlined at the top of index
    //re: order of everything running. it prevents
    //from the below running is the state has no vidoe
    //dont do these spinners all the time only specific instances

  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`
  //string interpolation!^^

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
        <div className="details">
          <div>{ video.snippet.title }</div>
          <div>{ video.snippet.description }</div>
        </div>
      </div>
    </div>
    )
}

export default VideoDetail;
