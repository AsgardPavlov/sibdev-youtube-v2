import Reacr from 'react'
import styled from 'styled-components'

export default function Table({liked, setLiked}){
    return(
        <>
        {liked ? (
            <Wrapper>
            <svg className="table" width="232" height="136" viewBox="0 0 232 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M116 4L123 11H221C223.761 11 226 13.2386 226 16V123C226 125.761 223.761 128 221 128H11C8.23857 128 6 125.761 6 123V16C6 13.2386 8.23858 11 11 11H109L116 4Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d" x="0" y="0" width="232" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
            </defs>
            </svg>
            <p>Поиск сохранён в разделе «Избранное»</p>
            <a href="/liked">Перейти в избранное</a>
          </Wrapper>
        ) : null}
        </>
    )
}

const Wrapper = styled.div`
    display: block;
    position: absolute;
    top: 154px;
    left: 960px;
    p{
      position: absolute;
      height: 48px;
      left: 15px;
      right: 15px;
      top: 22px;
      font-family: PT Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
    a{
      position: absolute;
      height: 24px;
      left: 15px;
      right: 15px;
      top: 85px;
      font-family: PT Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #1390E5;
      cursor: pointer;      
    }
    a:hover{
      border: none
    }
`