import React from "react";
import styled from "styled-components";
import moment from 'moment'
import Footer from "./Footer";
import { carListArray } from '../assets/carListArray'
import { useState, useEffect } from "react";
// skip and take for pagination.
let skip = 0
let take = 25

const Leaderboard = () => {
  const [leaderboardEntriesState, setLeaderboardEntriesState] = useState(null)
  const [totalEntriesCount, setTotalEntriesCount] = useState(null)
  // setTrack is there in case the other tracks of SRP would need to be included.
  const [track, setTrack] = useState('shuto_revival_project_beta')
  const [stage, setStage] = useState('Belt Inner')
  const [car, setCar] = useState('no car selected')
  
  //get the leaderboard entries to display them.
  useEffect(() => {
    // get the leaderboard by track and stage if no specific car has been selected.
    if(car === 'no car selected') {
      fetch(`/api/timing/leaderboard?track=${track}&stage=${stage}&car=&skip=${skip}&take=${take}`)
      .then(response => response.json())
      .then((data) => {
        // set the total amount of entries for this filtered leaderboard.
        setTotalEntriesCount(data.data.totalCount)
        // set every entries of this filtered leaderboard.
        setLeaderboardEntriesState(data.data.entries)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
    // get the leaderboard with a car selected.
    else {
      fetch(`/api/timing/leaderboard?track=${track}&stage=${stage}&car=${car}&skip=${skip}&take=${take}`)
      .then(response => response.json())
      .then((data) => {
        // set the total amount of entries for this filtered leaderboard.
        setTotalEntriesCount(data.data.totalCount)
        // set every entries of this filtered leaderboard.
        setLeaderboardEntriesState(data.data.entries)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  },[track, stage, car])

  // set the stage in a set to fetch the leaderboard
  const changeStage = (ev) => {
    setStage(ev.target.value)
    skip = 0
  }
  // set the car in a state to fetch the leaderboard
  const changeCar = (ev) => {
    setCar(ev.target.value)
    skip = 0
  }
  // pagination function. same as the other fetches but gets the previous 25 leaderboard entries.
  const previousPage = () => {
    skip -= 25
    if(car === 'no car selected') {
      fetch(`/api/timing/leaderboard?track=${track}&stage=${stage}&car=&skip=${skip}&take=${take}`)
      .then(response => response.json())
      .then((data) => {
        setTotalEntriesCount(data.data.totalCount)
        setLeaderboardEntriesState(data.data.entries)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
    else {
      fetch(`/api/timing/leaderboard?track=${track}&stage=${stage}&car=${car}&skip=${skip}&take=${take}`)
      .then(response => response.json())
      .then((data) => {
        setTotalEntriesCount(data.data.totalCount)
        setLeaderboardEntriesState(data.data.entries)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  }
  // pagination function. same as the other fetches but gets the next 25 leaderboard entries.
  const nextPage = () => {
    skip += 25
    if(car === 'no car selected') {
      fetch(`/api/timing/leaderboard?track=${track}&stage=${stage}&car=&skip=${skip}&take=${take}`)
      .then(response => response.json())
      .then((data) => {
        setTotalEntriesCount(data.data.totalCount)
        setLeaderboardEntriesState(data.data.entries)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
    else {
      fetch(`/api/timing/leaderboard?track=${track}&stage=${stage}&car=${car}&skip=${skip}&take=${take}`)
      .then(response => response.json())
      .then((data) => {
        setTotalEntriesCount(data.data.totalCount)
        setLeaderboardEntriesState(data.data.entries)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  }

  return (
    <>
      <Wrapper>
      <PageWrapper>
      <H1>Leaderboard</H1>
          <OptionsDiv>
                <CircuitSelect name="stage" onChange={changeStage}>
                  <option value="Belt Inner">Belt Inner</option>
                  <option value="Belt Outer">Belt Outer</option>
                  <option value="C1 Inner">C1 Inner</option>
                  <option value="C1 Outer">C1 Outer</option>
                  <option value="Mirai Inner">Mirai Inner</option>
                  <option value="Mirai Outer">Mirai Outer</option>
                  <option value="Shibuya">Shibuya</option>
                  <option value="Shinjuku">Shinjuku</option>
                </CircuitSelect>
                <CarSelect name="car" onChange={changeCar}>
                  <option value={'no car selected'} >Show all cars</option>
                  {
                    carListArray.map((carName, index) => {
                      return (
                        <option key={`option ${carName}${index}`} value={carName}>{carName}</option>
                      ) 
                    })
                  }
                </CarSelect>
          </OptionsDiv>
            <LeaderBoardTable>
              <thead>
                <tr>
                  <ThRank>Rank</ThRank>
                  <ThDate>Date</ThDate>
                  <ThName>Name</ThName>
                  <ThCar>Car</ThCar>
                  <ThTime>Time</ThTime>
                </tr>
              </thead>
              <TableBody>
                {
                  leaderboardEntriesState &&
                  leaderboardEntriesState.map((entry, index) => {
                    const rank = index + 1
                    return (
                      <React.Fragment key={`entry ${entry.carRank} ${index}`}>
                        {
                          (entry.carRank === 1) ?
                          <TableRow key={`${entry.carRank} ${entry.carModel}`}>
                            <TableData style={{color: '#854b8c'}} >{rank + skip}</TableData>
                            <TableData style={{color: '#854b8c'}} >{entry.createdAt.replace("T", " ")}</TableData>
                            <TableData style={{color: '#854b8c'}} >{entry.player}</TableData>
                            <TableData style={{color: '#854b8c'}} >{entry.carModel}</TableData>
                            <TableData style={{color: '#854b8c'}} >{moment(entry.lapTime).format('mm:ss:SSS')}</TableData>
                          </TableRow>
                          :
                          <TableRow key={`${entry.carRank} ${entry.carModel}`}>
                            <TableData style={{color: '#b9955b'}} >{rank + skip}</TableData>
                            <TableData style={{color: '#b9955b'}} >{entry.createdAt.replace("T", " ")}</TableData>
                            <TableData style={{color: '#b9955b'}} >{entry.player}</TableData>
                            <TableData style={{color: '#b9955b'}} >{entry.carModel}</TableData>
                            <TableData style={{color: '#b9955b'}} >{moment(entry.lapTime).format('mm:ss:SSS')}</TableData>
                          </TableRow>
                        }
                      </React.Fragment>
                    )
                  })
                }
              </TableBody>
            </LeaderBoardTable>
            { leaderboardEntriesState && totalEntriesCount &&
              <p>Showing {leaderboardEntriesState.length + skip} of {totalEntriesCount} entries</p>
            }
            <ButtonsDiv>
              <ButtonPage onClick={previousPage} disabled={skip <= 0}>Prev</ButtonPage>
              <ButtonPage onClick={nextPage} disabled={(skip + 25) >= totalEntriesCount}>Next</ButtonPage>
            </ButtonsDiv>
      </PageWrapper>
      </Wrapper>
      <Footer />
    </>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  color: #b9955b;
`;
const PageWrapper = styled.section`
  width: 80%;
  background-color: #1f2620;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  padding: 30px;

  @media (max-width: 450px) {
    padding: 0px;
    width: 100%;
  }
`;
const H1 = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;
const OptionsDiv = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: 60px;
    margin-bottom: 15px;
  }
`;
const CircuitSelect = styled.select`
  width: 300px;
  padding: 15px;
  background-color: #191e1a;
  border-style: none;
  border-radius: 5px;
  padding-left: 15px;
  color: #b9955b;

  @media (max-width: 800px) {
    margin-bottom: 5px;
  }
`;
const CarSelect = styled.select`
  width: 300px;
  padding: 15px;
  background-color: #191e1a;
  border-style: none;
  border-radius: 5px;
  padding-left: 15px;
  color: #b9955b;
  scrollbar-color: #b9955b #854b8c;
  scrollbar-width: thin;
`;
const LeaderBoardTable = styled.table`
  width: 90%;
  border-collapse: separate;
  border-spacing: 20px;
  border: 1px;
  border-width: solid;
  border-color: white;
  margin: 50px;

  @media (max-width: 800px) {
    margin: 5px 0px 0px;
    border-collapse: collapse;
  }
`;
const TableBody = styled.tbody`
`;
const ThRank = styled.th`
  text-align: start;
`;
const ThDate = styled.th`
  text-align: start;
`;
const ThName = styled.th`
  text-align: start;
`;
const ThCar = styled.th`
  text-align: start;
`;
const ThTime = styled.th`
  text-align: start;
`;
const TableRow = styled.tr`
`;
const TableData = styled.td`
  font-size: 15px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;
const ButtonsDiv = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-right: 50px;
`;
const ButtonPage = styled.button`
  color: #b9955b;
  background-color: #191e1a;
  border-style: none;
  padding: 10px;
  border-radius: 10px;
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
export default Leaderboard