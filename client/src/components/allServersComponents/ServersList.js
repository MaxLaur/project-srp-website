import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import GameServer from "./GameServer";
import Footer from "../Footer";

const ServersList = () => {
  const { currentUser } = useContext(CurrentUserContext)
  // servers we want to display when the page first loads
  const serversChoiceBlankState = ({ allServers: false, asianServers: false, eurServers: false, usServers: false, favoriteServers: false})
  // set which region or favorite servers we want to display
  const [ serversChoice, setServersChoice ] = useState({ allServers: true, asianServers: false, eurServers: false, usServers: false, favoriteServers: false})
  
  // set servers by region choice or favorited depending which button is pressed.
  const displayServers = (ev) => {
    const value = ev.target.value
    if(value === 'all') {
      setServersChoice({ ...serversChoiceBlankState, allServers: true})
    }
    else if(value === 'asia') {
      setServersChoice({ ...serversChoiceBlankState, asianServers: true})
    }
    else if(value === 'europe') {
      setServersChoice({ ...serversChoiceBlankState, eurServers: true})
    }
    else if(value === 'north america') {
      setServersChoice({ ...serversChoiceBlankState, usServers: true})
    }
    else if(value === 'favorites') {
      setServersChoice({ ...serversChoiceBlankState, favoriteServers: true})
    }
  }
  
  return (
    <>
    <Wrapper>
      <H1>Servers list:</H1>
      <ServerRegionsButtonsDiv>
        <ServersRegions>
          <ServerButton onClick={displayServers} value="all" >All</ServerButton>
          <ServerButton onClick={displayServers} value="asia">Asia</ServerButton>
          <ServerButton onClick={displayServers} value="europe">Europe</ServerButton>
          <ServerButton onClick={displayServers} value="north america">North America</ServerButton>
          {
            currentUser &&
            <ServerButton onClick={displayServers} value="favorites">Favorites</ServerButton>
          }
        </ServersRegions>
      </ServerRegionsButtonsDiv>
      <ServersWrapper>
        {
          serversChoice.allServers &&
          <Regions>
            <RegionDiv>
              <GameServer serverApiUrl={`/api/getUsEast1`} serverName={'Us east - 1'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8082"} />
              <GameServer serverApiUrl={`/api/getUsEast2`} serverName={'Us east - 2'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8081"}/>
              <GameServer serverApiUrl={`/api/getUsEast3`} serverName={'Us east - 3'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8083"} />
              <GameServer serverApiUrl={`/api/getUsEast4`} serverName={'Us east - 4'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8084"} />
              <GameServer serverApiUrl={`/api/getUsEastPTB`} serverName={'Us east - PTB'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8085"} />
            </RegionDiv>
            <RegionDiv>
              <GameServer serverApiUrl={`/api/getEur1`} serverName={'Eur - 1'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8081"} />
              <GameServer serverApiUrl={`/api/getEur2`} serverName={'Eur - 2'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8082"} />
              <GameServer serverApiUrl={`/api/getEur3`} serverName={'Eur - 3'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8083"} />
              <GameServer serverApiUrl={`/api/getEur4`} serverName={'Eur - 4'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8085"} />
              <GameServer serverApiUrl={`/api/getEurPTB`} serverName={'Eur - PTB'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8084"} />
            </RegionDiv>
            <RegionDiv>
              <GameServer serverApiUrl={`/api/getAsia1`} serverName={'Asia - 1'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8081"} />
              <GameServer serverApiUrl={`/api/getAsia2`} serverName={'Asia - 2'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8082"} />
              <GameServer serverApiUrl={`/api/getAsia3`} serverName={'Asia - 3'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8083"} />
            </RegionDiv>
          </Regions>
        }
        {
          serversChoice.asianServers &&
          <RegionDiv>
            <GameServer serverApiUrl={`/api/getAsia1`} serverName={'Asia - 1'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8081"} />
            <GameServer serverApiUrl={`/api/getAsia2`} serverName={'Asia - 2'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8082"} />
            <GameServer serverApiUrl={`/api/getAsia3`} serverName={'Asia - 3'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=15.235.162.98&httpPort=8083"} />
          </RegionDiv>
        }
        {
          serversChoice.eurServers &&
          <RegionDiv>
            <GameServer serverApiUrl={`/api/getEur1`} serverName={'Eur - 1'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8081"} />
            <GameServer serverApiUrl={`/api/getEur2`} serverName={'Eur - 2'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8082"} />
            <GameServer serverApiUrl={`/api/getEur3`} serverName={'Eur - 3'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8083"} />
            <GameServer serverApiUrl={`/api/getEur4`} serverName={'Eur - 4'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8085"} />
            <GameServer serverApiUrl={`/api/getEurPTB`} serverName={'Eur - PTB'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=65.108.176.35&httpPort=8084"} />
          </RegionDiv>
        }
        {
          serversChoice.usServers &&
          <RegionDiv>
            <GameServer serverApiUrl={`/api/getUsEast1`} serverName={'Us east - 1'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8082"} />
            <GameServer serverApiUrl={`/api/getUsEast2`} serverName={'Us east - 2'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8081"} />
            <GameServer serverApiUrl={`/api/getUsEast3`} serverName={'Us east - 3'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8083"} />
            <GameServer serverApiUrl={`/api/getUsEast4`} serverName={'Us east - 4'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8084"} />
            <GameServer serverApiUrl={`/api/getUsEastPTB`} serverName={'Us east - PTB'} serverLink={"https://acstuff.ru/s/q:race/online/join?ip=5.161.43.117&httpPort=8085"} />
          </RegionDiv>
        }
        {
          serversChoice.favoriteServers && currentUser &&
          <FavoriteServersDiv>
              {
                currentUser.favoriteServers.map((server) => <GameServer key={server.serverApiUrl + server.serverName} serverApiUrl={server.serverApiUrl} serverName={server.serverName} serverLink={server.serverLink} />)
              }
          </FavoriteServersDiv>
        }
      </ServersWrapper>
    </Wrapper>
    <Footer />
    </>
  )
}
const Wrapper = styled.div`
`;
const ServerRegionsButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  
`;
const ServersRegions = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #1f2620;
  max-width: 1200px;
  min-height: 50px;
  font-size: 25px;
  border-style: solid;
  border-width: 2px;
  border-color: #b9955b;
  border-radius: 15px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`;
const ServerButton = styled.button`
  width: 200px;
  font-size: 15px;
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 2px;
  background-color: #191e1a;
  border-style: none;
  border-radius: 10px;
  color: #b9955b;
  
  cursor: pointer;
  transition: 0.45s ease-in-out;

  &:hover {
    background-color: #854b8c;
    transform: scale(1.1)
  }
  &:active {
    background-color: #b9955b;
  }
`;
const H1 = styled.h1`
  color: #b9955b;
  text-align: center;
`;
const ServersWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Regions = styled.div`
  display: flex;
  flex-direction: column;
`;
const RegionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 20px;
  
  @media (max-width: 450px) {
    margin-left: 0px;
  }
`;
const FavoriteServersDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 75%;
`;
export default ServersList;