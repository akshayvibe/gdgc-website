import React from 'react'
import HeroText from '../Components/HeroText/HeroText.jsx'
import JoinUsButton from '../Components/HeroText/JoinUsButton.jsx'
import building from '../assets/VitVectorImage.svg'
import cloudLeft from "../assets/Cloud_Elem_1.svg";
import cloudRight from "../assets/Cloud_Elem_2.svg";
import indigo from '../assets/Kite_Element_1.svg'
import airindia from '../assets/Kite_Element_2.svg'
import saturn from '../assets/Planets_Image.svg'
import learn from '../assets/learn.svg'
import build from '../assets/build.png'
import advitya1 from '../assets/Group1.png'
import advitya2 from '../assets/Group2.png'


function Home() {
  return (
    <>
      <img src={indigo} alt="" className="kite kite-left" />
      <img src={airindia} alt="" className="kite kite-right" />
      <img src={saturn} alt="" className="planet" />
      <img src={cloudLeft} alt="" className="cloud cloud-left" />
      <img src={cloudRight} alt="" className="cloud cloud-right" />
      <img src={learn} alt="" className="learn" />
      <img src={build} alt="" className="build" />
      <img src={advitya1} alt="" className="advitya1" />
      <img src={advitya2} alt="" className="advitya2" />
      <HeroText />
      <JoinUsButton />
      <div className="hero-building">
        <img src={building} alt="VIT Bhopal Building" />
      </div>


    </>
  )
}

export default Home