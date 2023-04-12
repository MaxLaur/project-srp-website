import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Downloads = () => {
  return (
    <>
    <BigWrapper>
      <LinksWrapper>
        <LinkWrapper>
          <H1>Download links</H1>
          <OfficialDownloadLinks><Links to='https://mega.nz/file/siIBBKzY#NLQoj4EKpC4atf8KDJ_KEl3uSnHWpQlR5fOb6vbc9k4' target='blank' >official build</Links></OfficialDownloadLinks>
          <MirrorDiv>
            <MirrorLink to="https://drive.google.com/file/d/1ixJvtHY4Q-S5vaucGNd3s_ujSXkYa46o/view?usp=sharing" target="blank">Mirror 1</MirrorLink>
            <MirrorLink to="https://drive.google.com/file/d/1HHYG9H9xaEfhCIvl7n5klOJZhUSYfDk0/view?usp=drivesdk" target="blank">Mirror 2</MirrorLink>
          </MirrorDiv>
          <TestDownloadLinks><Links to='https://mega.nz/file/t7xAFRYA#Cvsjpszt5gnJJ_awEKlleiOM_wcBtvRg1C93EA6dGPw' target='blank' >public test build</Links></TestDownloadLinks>
          <MirrorDiv>
            <MirrorLink to="https://drive.google.com/file/d/1toU91cVoJqpBLIiRAHYmJg1mfEuoBFeJ/view?usp=sharing" target="blank">Mirror 1</MirrorLink>
          </MirrorDiv>
          <CarsDownloadLinks><Links to='https://mega.nz/file/T7wThKjQ#MIdm3lSwqVAtDDBTBu3erh43pjrlyeRsAEEUOLB2tcI' target='blank'>car pack</Links></CarsDownloadLinks>
          <MirrorDiv>
            <MirrorLink to="https://mega.nz/file/KUJWEY5Q#urg1GOu4lzFqQDD4wuJDteK10HuH2duew0hzF1hJz6c" target="blank">Mirror 1</MirrorLink>
            <MirrorLink to="https://drive.google.com/file/d/1b4XKCzR2k60ycZJw46m9dBJPYCP3O7DF/view?usp=share_link" target="blank">Mirror 2</MirrorLink>
            <MirrorLink to="https://drive.google.com/file/d/1p8Mr3uHGInRzPUu2d-13mQQSfCvPn5sc/view?usp=share_link" target="blank">Mirror 3</MirrorLink>
            <MirrorLink to="https://mega.nz/file/K3B3VBIT#X_cz7HvUHheXzdaj4QjELqhEJrBxXK0oyoKoqSoaoHI" target="blank">Mirror 4</MirrorLink>
          </MirrorDiv>
        </LinkWrapper>
        <MapLink to="https://i.imgur.com/Iya1Q5l.pngTrack" target="_blank">
          <MapImg src={"https://i.imgur.com/Iya1Q5l.pngTrack"}/>
          <MapSpan>Save the map</MapSpan>
        </MapLink>
      </LinksWrapper>
      <VideoWrapper>
        <InstalationDiv>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Y4Ku4wyiTl8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen='1'></iframe>
        </InstalationDiv>
      </VideoWrapper>
    </BigWrapper>
    <Footer />
    </>

  )
}

const BigWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const MapLink = styled(Link)`
  margin-left: 40px;
  margin-top: 35px;
  text-decoration: none;
  color: #854b8c;
  transition: 0.45s ease-in-out;

  &:hover {
    transform: scale(1.1)
  }
`;
const MapImg = styled.img`
  max-width: 120px;
  margin-top: 55px;
  margin-left: 40px;
  @media (max-width: 600px) {
    margin-left: 10px;
  }
`;
const MapSpan = styled.span`
  margin-left: 50px;
  @media (max-width: 600px) {
    margin-left: 10px;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #1f2620;
  max-width: 400px;
  max-height: 300px;
  margin-top: 3%;
  margin-left: 5%;
  padding: 20px 70px 80px 70px;
  border-style: solid;
  border-width: 2px;
  border-color: #b9955b;
  border-radius: 15px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  transition: 0.45s ease-in-out;

  &:hover {
    transform: scale(1.1)
  }
  @media (max-width: 1300px) {
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    margin-left: 0px;
    &:hover {
    transform: none;
    }
  }
`;
const VideoWrapper = styled.div`
  background-color: #1f2620;
  max-width: 560px;
  min-height: 320px;
  color: #b9955b;
  margin-top: 400px;
  margin-right: 100px;
  margin-bottom: 100px;
  padding: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: #b9955b;
  border-radius: 15px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  transition: 0.45s ease-in-out;

  &:hover {
    transform: scale(1.1)
  }
  @media (max-width: 1300px) {
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    &:hover {
    transform: none;
  }
  }
`;
const MirrorDiv = styled.div`
  width: 216px;
`;
const MirrorLink = styled(Link)`
  font-size: 12px;
  margin-right: 10px;
  color: #b9955b;
  text-decoration: none;

  &:hover {
    color: #854b8c;
  }
`;
const LinkWrapper = styled.div`
`;
const H1 = styled.h1`
  color: #b9955b;
`;
const OfficialDownloadLinks = styled.h2`
  margin-bottom: 0px;
  position: relative;
  width: 200px;

  &::before {
    content: '';
    position: absolute;
    width: 73%;
    height: 4px;
    border-radius: 4px;
    background-color: #b9955b;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
const TestDownloadLinks = styled.h2`
  margin-bottom: 10px;
  position: relative;
  width: 200px;

  &::before {
    content: '';
    position: absolute;
    width: 95%;
    height: 4px;
    border-radius: 4px;
    background-color: #b9955b;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
const CarsDownloadLinks = styled.h2`
  margin-bottom: 10px;
  position: relative;
  width: 200px;

  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 4px;
    border-radius: 4px;
    background-color: #b9955b;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
const Links = styled(Link)`
  color: #854b8c;
  text-decoration: none;
`;
const InstalationDiv = styled.div`
`;

export default Downloads;