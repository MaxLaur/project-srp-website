import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext";

const GameServer = ({ serverApiUrl, serverName, serverLink }) => {
  const [server, setServer] = useState(null)
  // state for the favorited star icon
  const [isFavorited, setisFavorited] = useState(false)
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
  // state for when I hover over the sever's card and want to show the players list.
  // Not functional right now but keeping it's pieces around because I would like to
  // fix its bugs.
  const [hoveredOver, setHoveredOver] = useState(false)
  
  useEffect(() => {
    fetch(`${serverApiUrl}`)
    .then(response => response.json())
    .then((data)=> {
      if(!server) {
        setServer(data.data)
      }
      if(currentUser && !server) {
        setisFavorited(currentUser.favoriteServers.find((lm) => lm.serverName === serverName))
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }, [currentUser])
  
  // adds or remove favorite server and sets the new updated
  // user object to currentUser state so that favorited servers move in
  // and out of the favorites section when toggled.
  const addToUserFavoriteServers = (ev) => {
    const body = { serverName, serverApiUrl, serverLink, user_id: currentUser._id }
    fetch("/api/updateUserFavorites", {
      method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then((data) => {
      setisFavorited(!isFavorited)
      setCurrentUser(data.data)
      
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // function that returns the number of players online or empty/full
  // const numOfPlayers = () => {
  //   if(server.clients === 0) return 'Server empty.'

  //   else if(server.clients === server.maxclients) return 'Server full.'
    
  //   else return server.clients
  // }

  return (
    // setting the state so that it displays the players list only when hovered.
    // buggy.
    <Wrapper hoveredOver={hoveredOver} onMouseEnter={() => {setHoveredOver(true)}} onMouseLeave={() => {setHoveredOver(false)}}>
          {
            server &&
            <>
              {
                currentUser &&
                <FavoritesButton onClick={addToUserFavoriteServers} value={server.name} ><FiStar fill={isFavorited ? 'yellow' : '' } /> add to favorites</FavoritesButton>
              }
              <InfoKeys><KeySpan>Server: </KeySpan>{serverName}</InfoKeys>
              <InfoKeys><KeySpan>Players connected: </KeySpan> <NumOfPlayersSpan value={server.clients}>{server.clients}/40</NumOfPlayersSpan></InfoKeys>
              <InfoKeys><KeySpan>Grip level: </KeySpan> {server.grip}</InfoKeys>
              <InfoKeys><KeySpan>Ambient Temperature: </KeySpan> {server.ambientTemperature.toFixed(0)}°C</InfoKeys>
              <InfoKeys><KeySpan>Road Temperature: </KeySpan> {server.roadTemperature.toFixed(0)}°C</InfoKeys>
              <JoinServerLink target="_blank" to={serverLink}><JoinServerButton>Join {serverName}</JoinServerButton></JoinServerLink>
              {/* {
                keeping this here for when I am able to fix my div
                pushing down everything beneath it.
                hoveredOver && */}
                <PlayerUl>
                {
                  server.players.Cars.map((car, index) => {
                    return (
                      <React.Fragment key={`${index} ${server.name}`} >
                        {
                          car.IsConnected
                          &&
                          <CarLi key={`${car.DriverName} ${server.name}`}>
                            <PlayerDiv><KeySpan></KeySpan>{car.DriverName.substring(0, 20)}</PlayerDiv>
                          </CarLi>
                        }
                      </React.Fragment>
                    )
                  })
                }
              </PlayerUl>
              {/* } */}
            </>
          }
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: #1f2620;
  //keeping this here for when I am able to fix my div
  //pushing down everything beneath it.
  /* max-height: 200px; */
  /* max-height: ${props => (props.hoveredOver ? `1400px` : `200px`)};
  z-index: ${props => (props.hoveredOver ? `100` : `0`)}; */
  /* position: ${props => (props.hoveredOver ? `absolute` : `relative`)}; */
  padding: 50px;
  padding-bottom: 0 auto;
  margin-bottom: 80px;
  border-style: solid;
  border-width: 2px;
  color: #b9955b;
  border-radius: 15px;
  /* flex-grow: 1; */
  transition: 0.45s ease-in-out;

  &:hover {
    transform: scale(1.1);
    /* position: absolute; */
  }
`;
const FavoritesButton = styled.button`
  margin-bottom: 10px;
  padding: 10px 15px;
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
const PlayerUl = styled.ul`
`;
const CarLi = styled.li`
  list-style: decimal;
`;
const PlayerDiv = styled.div`
  margin-bottom: 3px;
  margin-left: 5px;
`;
const InfoKeys = styled.div`
  margin-bottom: 5px;
`;
const KeySpan = styled.span`
  font-weight: bold;
  color: #854b8c;
`;
const NumOfPlayersSpan = styled.span`
  color: ${props => (props.value === 0 || props.value === 40 ? '#cc2737' : (props.value > 20 ? 'green' : '#e9b12d'))};
`;
const JoinServerLink = styled(Link)`
`;
const JoinServerButton = styled.button`
  width: 200px;
  height: 35px;
  font-size: 15px;
  margin-left: 2px;
  margin-right: 2px;
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

export default GameServer;