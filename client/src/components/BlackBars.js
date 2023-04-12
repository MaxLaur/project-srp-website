import styled from 'styled-components';

// small quick hack to deal with youtube video tags for homepage rather than downloading
// and running the video on my server to not have youtube tags. Black divs appear over the video
// at the top and at the bottom.
const BlackBars = () => {
  return (
    <>
      <BlackBarTop></BlackBarTop>
      <BlackBarBottom></BlackBarBottom>
    </>
  )
}
const BlackBarTop = styled.div`
  height: 70px;
  position: absolute;
  left:0;
  top:0;
  right:0;
  background-color: rgba(2, 2, 2, 1);
  transition: background-color 0s linear 7s;
  animation: fadeOut 0s linear 7s forwards;
  
  @keyframes fadeOut {
    to {
      background-color: rgba(2, 2, 2, 0);
    }
  }
`;
const BlackBarBottom = styled.div`
  height: 70px;
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  background-color: rgba(2, 2, 2, 1);
  transition: background-color 0s linear 7s;
  animation: fadeOut 0s linear 7s forwards;
  
  @keyframes fadeOut {
    to {
      background-color: rgba(2, 2, 2, 0);
    }
  }
`;

export default BlackBars;