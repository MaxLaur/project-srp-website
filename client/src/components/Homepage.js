import styled from "styled-components";
import BlackBars from "./BlackBars";

const Homepage = () => {
  return (
    <PageWrapper>
      <BlackBars />
      <BackgroundVideo src="https://www.youtube.com/embed/zTypuLr5sNE?&autoplay=1&mute=1&controls=0&playlist=zTypuLr5sNE&fs=0&loop=1&modestbranding=1&start=5&playsinline=1" frameBorder="0"></BackgroundVideo>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const BackgroundVideo = styled.iframe`
  display: flex ;
  position: fixed;
  z-index: -99;
  width: 100vw;
  height: 100vh;
  pointer-events: none; 
`;

export default Homepage;