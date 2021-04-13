import React from "react";
import styled from "styled-components";
import Cover from './img/Video.svg'

export default function VideoItem ({ video, onVideoSelect }){
  return (
    <Wrapper key={video.snippet.channelId} style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
      <ImgCover alt="thumbnail" src={Cover}/> 
      <Title variant="subtitle1">
        {video.snippet.title}
      </Title>
      <ChanelView>
        <UnderTitle variant="chanel">{video.snippet.channelTitle}</UnderTitle>
        <UnderTitle variant="views">{video.snippet.channelId}</UnderTitle>
      </ChanelView>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 245px;
  height: 226px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`
const ImgCover = styled.img`
  width: 245px;
  height: 138px;
  margin: 0;
`
const Title = styled.b`
  width: 245px;
  height: auto;
  max-height: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`
const ChanelView = styled.div`
  width: 245px;
  height: 32px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`
const UnderTitle = styled.b`
  width: 245px;
  height: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: rgba(23, 23, 25, 0.3);
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`