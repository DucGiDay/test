import React from 'react'
import { Button } from 'primereact/button';
import { LazyLoadImage } from "react-lazy-load-image-component";

function GroupImage(props) {
  const styled = {
    borderRadius: '16px',
    filter: `${props.dropShadow}`
  }

  return (
    <div className='my-3'>
      <div className='flex justify-content-between align-items-center'>
        <span className='text-xl font-semibold' style={{color: `${props.themeColor}`}}>{props.category}</span>
        <Button style={{color: `${props.themeColor}`}} text >{`See more >>`}</Button>
      </div>

      {/* <div className='flex flex-wrap justify-content-between gap-2'> */}
      <div className='grid'>
        {props.images.map((image, index) => {
          return(
            <div key={index} className='flex flex-column justify-content-center align-items-center'>
              <LazyLoadImage src={!image["link-img"] ? image["link_img"]: image["link-img"]} alt="Image"  width='120' className='col' style={styled}/>
              {/* <div>{image.location}</div> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GroupImage