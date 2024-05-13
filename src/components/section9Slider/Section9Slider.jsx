import React from 'react'
import './Section9Slider.css'
import styled, { keyframes, css } from "styled-components";


const Section9Slider = ({row1}) => {
  return (
    <AppContainer>
    <Wrapper>
      <Marquee>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el) => (
            <ImageGroup>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>
      
    </Wrapper>
  </AppContainer>
  )
}

export default Section9Slider;


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 950px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  cursor:pointer;
`;


// const AppContainer = styled.div`
//       width: 100%;
//       height: 100%;
//       color: #000000;
//       position: relative;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     `;
    
//     const Wrapper = styled.div`
//       width: 100%;
//       height: fit-content;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       flex-direction: column;
//     `;
    
//     const Text = styled.div`
//       font-size: 35px;
//       font-weight: 500;
//       margin-bottom: 10px;
//       color: #02203c;
//     `;
    
//     const Note = styled.div`
//       font-size: 18px;
//       font-weight: 200;
//       margin-bottom: 40px;
//       color: #7c8e9a;
//     `;
    
//     const Marquee = styled.div`
//       display: flex;
//       width: 950px;
//       overflow: hidden;
//       user-select: none;
//       mask-image: linear-gradient(
//         to right,
//         hsl(0 0% 0% / 0),
//         hsl(0 0% 0% / 1) 10%,
//         hsl(0 0% 0% / 1) 90%,
//         hsl(0 0% 0% / 0)
//       );
//     `;
    
//     const scrollX = keyframes`
//       from {
//         left: translateX(0);
//       }
//       to {
//         transform: translateX(-100%);
//       }
//     `;
    
//     const common = css`
//       flex-shrink: 0;
//       display: flex;
//       align-items: center;
//       justify-content: space-around;
//       white-space: nowrap;
//       width: 100%;
//       animation: ${scrollX} 30s linear infinite;
//     `;
    
//     const MarqueeGroup = styled.div`
//       ${common}
//     `;
//     const MarqueeGroup2 = styled.div`
//       ${common}
//       animation-direction: reverse;
//       animation-delay: -3s;
//     `;
    
//     const ImageGroup = styled.div`
//       display: grid;
//       place-items: center;
//       width: clamp(10rem, 1rem + 40vmin, 30rem);
//       padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
//     `;
    
//     const Image = styled.img`
//       object-fit: contain;
//       width: 100%;
//       height: 100%;
//       border: 1px solid black;
     
//     `;