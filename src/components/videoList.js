import React from 'react';
import VideoListItem from './videoListItem';

const videoList = (props)=>{
    console.log(props);
    const listVideos = props.videos.map(function(video){
        return( 
        <VideoListItem video = {video} key = {video.etag} />
        );
    });

    return(
        <div>
            <ul className = "col-md-4 list-group">
                {listVideos}
            </ul>
        </div>
    );
};

export default videoList;