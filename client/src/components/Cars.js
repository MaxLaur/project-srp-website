import styled from "styled-components";
import { useEffect, useState } from "react";
import { carObjectsArray } from '../assets/carListArray'
// I imported all the photos because I did not want to host them.
import Footer from "./Footer";
import s2000 from '../assets/cars/ltkaeri_honda_s2000_gt1_amuse.jpg'
import s2000Pwr from '../assets/cars/ltkaeri_honda_s2000_gt1_amuse_pwr.jpg'
import mr2 from '../assets/cars/ddm_toyota_mr2_sw20_shuto.jpg'
import mr2Pwr from '../assets/cars/ddm_toyota_mr2_sw20_shuto_pwr.jpg'
import r34VSpec from '../assets/cars/nissan_skyline_r34_v-specperformance.jpg'
import r34VSpecPwr from '../assets/cars/nissan_skyline_r34_v-specperformance_pwr.jpg'
import s15 from '../assets/cars/wm_nissan_s15.jpg'
import s15Pwr from '../assets/cars/wm_nissan_s15_pwr.jpg'
import evo5 from '../assets/cars/srp_mitsubishi_evo_5_wangan.jpg'
import evo5Pwr from '../assets/cars/srp_mitsubishi_evo_5_wangan_pwr.jpg'
import f40 from '../assets/cars/slang_ferrari_f40.jpg'
import f40Pwr from '../assets/cars/slang_ferrari_f40_pwr.jpg'
import lamborghini from '../assets/cars/spear_lamborghini_lp640_veilside.jpg'
import lamborghiniPwr from '../assets/cars/spear_lamborghini_lp640_veilside_pwr.jpg'
import hondaEk9 from '../assets/cars/amy_honda_ek9_turbo.jpg'
import hondaEk9Pwr from '../assets/cars/amy_honda_ek9_turbo_pwr.jpg'
import r31 from '../assets/cars/ddm_nissan_skyline_hr31_house.jpg'
import r31Pwr from '../assets/cars/ddm_nissan_skyline_hr31_house_pwr.jpg'
import rx7 from '../assets/cars/wm_mazda_rx7_fd_rgo.jpg'
import rx7Pwr from '../assets/cars/wm_mazda_rx7_fd_rgo_pwr.jpg'
import r34ZTune from '../assets/cars/bksy_nissan_skyline_r34_z_tune.jpg'
import r34ZTunePwr from '../assets/cars/bksy_nissan_skyline_r34_z_tune_pwr.jpg'
import s14 from '../assets/cars/kire_nissan_s14_navan.jpg'
import s14Pwr from '../assets/cars/kire_nissan_s14_navan_pwr.jpg'
import hondaDc2 from '../assets/cars/amy_honda_dc2_turbo.jpg'
import hondaDc2Pwr from '../assets/cars/amy_honda_dc2_turbo_pwr.jpg'
import porsche from '../assets/cars/wm_porsche_911_930.jpg'
import porschePwr from '../assets/cars/wm_porsche_911_930_pwr.jpg'
import supra from '../assets/cars/ks_toyota_supra_mkiv_tuned.jpg'
import supraPwr from '../assets/cars/ks_toyota_supra_mkiv_tuned_pwr.jpg'

const Cars = () => {
  // set a car object index in a state.
  const [carIndex, setCarIndex] = useState(0)
  const carImages = [
    {car: s2000, graph: s2000Pwr},
    {car: mr2, graph: mr2Pwr},
    {car: r34VSpec, graph: r34VSpecPwr},
    {car: s15, graph: s15Pwr},
    {car: evo5, graph: evo5Pwr},
    {car: f40, graph: f40Pwr},
    {car: lamborghini, graph: lamborghiniPwr},
    {car: hondaEk9, graph: hondaEk9Pwr},
    {car: r31, graph: r31Pwr},
    {car: rx7, graph: rx7Pwr},
    {car: r34ZTune, graph: r34ZTunePwr},
    {car: s14, graph: s14Pwr},
    {car: hondaDc2, graph: hondaDc2Pwr},
    {car: porsche, graph: porschePwr},
    {car: supra, graph: supraPwr}
  ]

  // function for the next and previous button to set by index 
  // which car to be displayed in details.
  const changeIndex = (ev) => {
      let newIndex = carIndex
      //If value = decrem index-- 
      if(ev.target.value === 'decrement' && carIndex > 0) {
        newIndex -= 1;
        setCarIndex(newIndex)
      }
      //if value = increm index++
      else if(ev.target.value === 'increment' && carIndex < carObjectsArray.length -1) {
        newIndex += 1;
        setCarIndex(newIndex)
      }
  }
  // function so set by index which car to be 
  // displayed in details by clicking on a car thumbnail.
  const chooseCar = (ev) => {
    ev.preventDefault()
    setCarIndex(parseInt(ev.target.parentNode.value))
  }

  // function that gets the width of the window.
  const getWindowWidth = () => {
    const width = window.innerWidth;
    return width;
  }
  // state that conditionally renders the layout of the 
  // page if device is small or big.
  const [screenWidth, setScreenWidth] = useState(getWindowWidth())
    // setting screenWidth state
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(getWindowWidth())
      }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
  
  return (
    <>
    <BigWrapper>
      <Wrapper>
        <H1>Cars</H1>
        {
          screenWidth >= 1300 &&
          <Details>
            <NextAndPrevious onClick={changeIndex} value={'decrement'} disabled={carIndex === 0}>Previous</NextAndPrevious>
              <CarImgAndDetails>
                <CarImg src={carImages[carIndex].car} />
                <CarDetails>
                  <DetailsDiv>
                    <div>Name: {carObjectsArray[carIndex].carName}</div>
                    <div>Author: {carObjectsArray[carIndex].carAuthor}</div>
                    <div>Year: {carObjectsArray[carIndex].year}</div>
                    <div>Make: {carObjectsArray[carIndex].brand}</div>
                    <div>Power: {carObjectsArray[carIndex].carHp}</div>
                  </DetailsDiv>
                  <PowerGraph src={carImages[carIndex].graph} />
                  <BrandLogoImg src={carObjectsArray[carIndex].brandLogo} />
                </CarDetails>
              </CarImgAndDetails>
            <NextAndPrevious onClick={changeIndex} value={'increment'} disabled={carIndex === carObjectsArray.length -1}>Next</NextAndPrevious>
          </Details>
        }
        {
          screenWidth <= 1299 &&
          <Details>
            <NextAndPreviousButtonsDiv>
              <NextAndPrevious onClick={changeIndex} value={'decrement'} disabled={carIndex === 0}>Previous</NextAndPrevious>
              <NextAndPrevious onClick={changeIndex} value={'increment'} disabled={carIndex === carObjectsArray.length -1}>Next</NextAndPrevious>
            </NextAndPreviousButtonsDiv>
              <CarImgAndDetails>
                <CarImg src={carImages[carIndex].car} />
                <CarDetails>
                  <DetailsDiv>
                    <div>Name: {carObjectsArray[carIndex].carName}</div>
                    <div>Author: {carObjectsArray[carIndex].carAuthor}</div>
                    <div>Year: {carObjectsArray[carIndex].year}</div>
                    <div>Make: {carObjectsArray[carIndex].brand}</div>
                    <div>Power: {carObjectsArray[carIndex].carHp}</div>
                  </DetailsDiv>
                  <PowerGraph src={carImages[carIndex].graph} />
                  <BrandLogoImg src={carObjectsArray[carIndex].brandLogo} />
                </CarDetails>
              </CarImgAndDetails>
          </Details>
        }
        
        <ThumbnailsDiv>
          {
            carImages.map((image, index) => {
              return (
                // should not make div clickable, should turn into a button.
                <ThumbnailButton key={image.car + index} value={index}  >
                  <CarThumbnail src={image.car} onClick={chooseCar} /> 
                </ThumbnailButton>
              )
            })
          }
        </ThumbnailsDiv>
      </Wrapper>
    </BigWrapper>
    <Footer />
    </>
  )
}
const BigWrapper = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
  }
`;
const H1 = styled.h1`
  text-align: center;
  color: #b9955b;
`;
const Details = styled.article`
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const NextAndPrevious = styled.button`
  height: 70px;
  width: 150px;
  font-size: 15px;
  margin: 200px 50px;
  background-color: #191e1a;
  border-style: none;
  border-radius: 10px;
  color: #b9955b;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  transition: 0.45s ease-in-out;

  &:hover {
    background-color: #854b8c;
    transform: scale(1.1)
  }
  &:active {
    background-color: #b9955b;
  }
  @media (max-width: 1300px) {
    margin: 10px 20px;
  }
`;
const NextAndPreviousButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const CarImgAndDetails = styled.article`
@media (max-width: 1300px) {
    margin: 0 auto;
  }
`;
const BrandLogoImg = styled.img`
  height: 100px;
  width: auto;
  padding-top: 40px;
  @media (max-width: 1300px) {
    margin: 0 auto;
    width: auto;
  }
`;
const PowerGraph = styled.img`
  height: 200px;
  width: auto;
  border-radius: 10px;
  border-style: solid;
  color: #b9955b;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  @media (max-width: 1300px) {
    margin: 0 auto;
    width: auto;
  }
`;
const CarImg = styled.img`
  border-radius: 15px;
  max-width: 900px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  @media (max-width: 1300px) {
    margin-left: 12px;
  }
  @media (max-width: 900px) {
    width: 350px;
    margin-left: 12px;
  }
`;
const CarThumbnail = styled.img`
  width: 150px;
  margin: 5px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #854b8c;
    transform: scale(1.5)
  }
  &:active {
    background-color: #b9955b;
  }
`;
const ThumbnailButton = styled.button`
  background-color: #1f2620;
  border-style: none;
  border-radius: 15px;
  padding: 0;
  margin: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`;
const CarDetails = styled.article`
  display: flex;
  justify-content: space-around;
  background-color: #1f2620;
  color: #b9955b;
  border-radius: 15px;
  padding: 10px 30px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 1300px) {
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
  }
`;
const DetailsDiv = styled.div`
  padding-top: 40px;
  @media (max-width: 1300px) {
    margin-bottom: 15px;
  }
`;
const ThumbnailsDiv = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1000px;
margin-left: 200px;
margin-top: 30px;
@media (max-width: 1300px) {
    margin: 0 auto;
  }
`;

export default Cars;