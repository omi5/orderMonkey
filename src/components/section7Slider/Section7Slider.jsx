import React from 'react'
import './Section7Slider.css'
import styled, { keyframes, css } from "styled-components";


const Section7Slider = () => {
    const row1 = [
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493a0_Frame%252012-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c4939b_Frame%252011-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c4939b_Frame%252011-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c49396_Frame%252010-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c49391_Frame%25209-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c4938c_Frame%25208-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c49387_Frame%25207-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c49382_Frame%25206-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c49378_Frame%25203-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c49373_Frame%25204-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c4937d_Frame%25205-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493b9_Frame%252013-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493af_Frame%252014-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493a5_Frame%252015-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493be_Frame%252016-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493aa_Frame%252017-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493b4_Frame%252018-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493c3_Frame%25202-p-500.png",
        "https://assets-global.website-files.com/640b64b5807a0d3e049371ee/66209cd7d7022ae1f7c493c8_Frame%252001-p-500.png",
        
      ];
    
    return (
        <AppContainer>
          <Wrapper>
            {/* <Text>With Great Outcomes.</Text>
            <Note>Our customers have gotten offers from awesome companies.</Note> */}
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
      );
    }
    
    export default Section7Slider;
    
    const AppContainer = styled.div`
      width: 100vw;
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
      width: 320%;
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
     
    `;
