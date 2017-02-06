import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //passing the props in is the same
  //as defining them here like:
  //const videoSelect = props.videoSelect
  const imageUrl = video.snippet.thumbnails.default.url;

  // const video = props.video;
  //by doing {video} up there its the same thing as doing
//declaring a video thing here!

  return (
    //whenever a user clicks on the LI, something happens!
      <li
      onClick={() => onVideoSelect(video)}
      className='list-group-item'>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={ imageUrl }/>
          </div>

          <div className="media-body">
            <div className="media-heading"> { video.snippet.title } </div>
          </div>
        </div>
      </li>
    )
}

export default VideoListItem;
