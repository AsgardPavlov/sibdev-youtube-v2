import React from "react";
import styled from "styled-components";

const VideoDetail = ({ video }) => {
  if (!video) return null;;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <>
      <Wrapper>
        <FrameWrap>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
          />
        </FrameWrap>
        <DesWrap elevation={6}>
          <h4>
            {video.snippet.title}
          </h4>
          <h5>
            {video.snippet.channelTitle}
          </h5>
          <h6>{video.snippet.description}</h6>
        </DesWrap>
      </Wrapper>
    </>
  );
}
export default VideoDetail;

const FrameWrap = styled.div`
  
`
const DesWrap = styled.div`
  padding: 15px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 200px 16px 200px;
`