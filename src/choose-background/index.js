import React, { useEffect, useState } from 'react';
import axios from "axios"

import GroupImage from './components/GroupImage';
import { InputText } from "primereact/inputtext";
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';
// import { Button } from 'primereact/button';

const ChooseBackground = () => {
  // const [popular, setPopular] = useState([])
  // const [spring, setSpring] = useState([])
  // const [vietnam, setVietnam] = useState([])
  // const [mountain, setMountain] = useState([])
  // const [waterfall, setWaterfall] = useState([])
  // const [forest, setForest] = useState([])
  // const [marvel, setMarvel] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    await axios.get("https://raw.githubusercontent.com/sonnh7289/python3-download/main/location-data2.json?fbclid=IwAR2gbPWqKntgejVk7oi2Nfrx1y32KZZA1segeorM9BpMNu1gzyHseLm8JAI").then((res) => {
      // setPopular(res.data.slice(0,3))
      // setSpring(res.data.slice(3,9))
      // setVietnam(res.data.slice(9,15))
      // setMountain(res.data.slice(15,21))
      // setWaterfall(res.data.slice(21,27))
      // setForest(res.data.slice(27,33))
      // setMarvel(res.data.slice(33,39))
      setImages(res.data)
    })
  }


  const itemLogo = [
    {
      name: "Landscape",
      url: '/images/landscape-logo.svg'
    },
    {
      name: "People",
      url: '/images/people-logo.svg'
    },
    {
      name: "Weather",
      url: '/images/weather-logo.svg'
    },
    {
      name: "Country",
      url: '/images/country-logo.svg'
    },
    {
      name: "Season",
      url: '/images/season-logo.svg'
    }
  ]
  return (
    <div className="card m-2">
      {/* thanh search */}
      <div className='flex justify-content-center align-items-center gap-3 w-full'>
        <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputText placeholder="Search"  className='border-round-3xl p-inputtext-sm w-full'/>
        </span>
        <Image src="/public/images/upload.png" alt="Image"/>
      </div>

      {/* Logo categorie */}
      <div className='flex justify-content-center align-items-center gap-4 mt-4'>
        {itemLogo.map((item, index) => {
          return(<div key={index} className='flex flex-column justify-content-center align-items-center'>
            <Avatar image={item.url} size="xlarge" shape="circle" />
            <span>{item.name}</span>
          </div>
          )
        })}
      </div>

      {/* Popular container */}
      {/* <div className='my-3'>
        <div className='flex justify-content-between align-items-center'>
          <span className='text-xl font-semibold'>Popular</span>
          <Button onClick={testFunc} style={{color: 'black'}} text >{`See more >>`}</Button>
        </div>

        {/* <div className='flex flex-wrap justify-content-between gap-2'> 
        <div className='grid'>
          {popular.map((image, index) => {
            return (
              <img src={image["link-img"]} alt="Image" key={index} width='120' className='col' style={{borderRadius: '16px'}}/>
            )
          })}
        </div>
      </div> */}

      {/* Spring container */}
      {/* <GroupImage images={spring} category={"Spring"} themeColor={"#F30083"} dropShadow={"drop-shadow(5px 5px 2px rgba(243, 0, 131, 0.25))"}/> */}

      {/* Viet Nam container */}
      {/* <GroupImage images={vietnam} category={"Vietnam"} themeColor={"#FE0404"} dropShadow={"drop-shadow(4px 4px 2px rgba(254, 4, 4, 0.25))"}/> */}

      {/* Spring container */}
      {/* <GroupImage images={mountain} category={"Moutain"} themeColor={"#AEAEAE"} dropShadow={"drop-shadow(4px 4px 2px rgba(163, 162, 162, 0.25))"}/> */}

      {/* Spring container */}
      {/* <GroupImage images={waterfall} category={"Waterfall"} themeColor={"#0D95F8"} dropShadow={"drop-shadow(4px 4px 2px rgba(13, 149, 248, 0.25))"}/> */}

      {/* Spring container */}
      {/* <GroupImage images={forest} category={"Forest"} themeColor={"#0DA800"} dropShadow={"drop-shadow(4px 4px 2px rgba(13, 168, 0, 0.25))"}/> */}

      {/* Spring container */}
      {/* <GroupImage images={marvel} category={"Marvel"} themeColor={"#FC8CF7"} dropShadow={"drop-shadow(4px 4px 2px rgba(252, 140, 247, 0.25))"}/> */}
      
      {/* All Images */}
      <GroupImage images={images} category={"Landscape"} themeColor={"#F30083"} dropShadow={"drop-shadow(5px 5px 2px rgba(243, 0, 131, 0.25))"}/>
    </div>
  );
};

export default ChooseBackground;
