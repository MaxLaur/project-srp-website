import styled from "styled-components"
import Footer from "./Footer";

const ProjectInfo = () => {
  return (
    <>
    <Wrapper>
      <H1>Project info</H1>
      <ProjectInfoDivs>
        <ProjectInfoDiv1>
          <P>
            The Shutoko Revival Project is a popular mod for the racing simulation
            game Assetto Corsa that seeks to recreate the Tokyo Metropolitan Expressway, 
            commonly known as the "Shutoko," in the virtual world. 
          </P>
          <P>
            The Shutoko Revival 
            Project is an ambitious project that aims to replicate the various highways 
            and roads that make up the massive expressway system that spans Tokyo and its 
            surrounding areas.
          </P>
        </ProjectInfoDiv1>
        <ProjectInfoDiv2>
          <P>
            The mod features highly detailed and accurate 3D models of various landmarks, 
            buildings, and roads found along the Shutoko, as well as realistic physics and 
            driving mechanics that aim to provide an immersive driving experience. 
          </P>
          <P>
            The mod 
            also includes a variety of custom cars and racing events that take place on the 
            Shutoko, allowing players to race against each other or against AI opponents.
          </P>
          
        </ProjectInfoDiv2>
      </ProjectInfoDivs>
      <ProjectInfoDiv>
        <ProjectInfoDiv3>
        <P>
            Since its initial release in 2017, the Shutoko Revival Project has garnered a 
            large following within the Assetto Corsa community, with many players praising 
            the mod for its attention to detail and realistic portrayal of Tokyo's 
            expressway system. 
          </P>
        </ProjectInfoDiv3>
      </ProjectInfoDiv>
    </Wrapper>
    <Footer />
    </>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #b9955b;
  padding-bottom: 70px;
`;
const ProjectInfoDivs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 100px;
  margin-right:100px;
  @media (max-width: 1300px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 920px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
const ProjectInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 100px;
  margin-right:100px;
  
  @media (max-width: 920px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const ProjectInfoDiv1 = styled.div`
  background-color: #1f2620;
  max-width: 500px;
  max-height: 190px;
  padding: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: #b9955b;
  border-radius: 15px;
  transition: 0.45s ease-in-out;

  &:hover {
    transform: scale(1.1)
  }
  @media (max-width: 1300px) {
    padding: 20px;
    padding-bottom: 40px;
    
  }
  @media (max-width: 920px) {
    padding-bottom: 20px;
    margin-top: 15px;
    max-height: 500px;
  }
`;
const ProjectInfoDiv2 = styled.div`
  background-color: #1f2620;
  max-width: 500px;
  margin-top: 200px;
  padding: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: #b9955b;
  border-radius: 15px;
  transition: 0.45s ease-in-out;

  &:hover {
    transform: scale(1.1)
  }
  @media (max-width: 1300px) {
    padding: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 920px) {
    padding-bottom: 20px;
    margin-top: 15px;
  }
`;
const ProjectInfoDiv3 = styled.div`
  background-color: #1f2620;
  max-width: 500px;
  max-height: 110px;
  padding: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: #b9955b;
  border-radius: 15px;
  transition: 0.45s ease-in-out;

  &:hover {
    transform: scale(1.1)
  }
  @media (max-width: 920px) {
    padding: 20px;
    padding-bottom: 40px;
    margin-top: 15px;
    max-height: 500px;
  }
`;
const H1 = styled.h1`
  text-align: center;
`;
const P = styled.p`
  color: #b9955b;
`;
export default ProjectInfo