import React, {useState} from 'react'
import youtube from './Search/youtube';
import styled from 'styled-components';

import SearchBar from './Search/SearchBar';
import VideoList from './Search/VideoList';
import VideoDetail from './Search/VideoDetail';
import { useLocation } from 'react-router';

export const Search = (props) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [result, setResult] = useState(8)

    // const KEY = 'AIzaSyAfrWeEsFvzBsj_5R7vzRgylwMU2Pec2BI';
    // const KEY = 'AIzaSyDQ2u0cK99bUtbMRj2DgkRr5L2bFbWBTGw';
    // const KEY = 'AIzaSyD3MlsVrxqjM1Ee_QWH6fcBm79BC-J9R2I';
    const KEY = "AIzaSyBdV3voIQEIyGm0sbznKu09oSB3N2wsPSI";

    const query = new URLSearchParams(useLocation().search)
    const name = query.get("q")
    
    if (name){
        handleSubmit(name)
    }
    else(console.log("none q"))

    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: result,
            key: KEY,
            q: searchTerm,
          }
        });
        setVideos(videos);
    }

    return (
        <>
            <Body>
                <SearchBar onSubmit={handleSubmit} videos={videos} result={result} setResult={setResult} />
                <VideoDetail video={selectedVideo} />
                <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Body>
        </>
    );
}

const Body = styled.div`
    margin: 0 200px 200px 0 ;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    top: 80px;
    position: absolute;
`

export default Search;