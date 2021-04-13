import React from "react";
import styled from 'styled-components';
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {

  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Wrapper>
      {listOfVideos}
    </Wrapper>
  );
}
export default VideoList;

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding-left: 200px;
  padding-right: 200px;
  justify-content: space-between;
  height: auto;
`
