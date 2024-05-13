import React, { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';
import { Button, Tooltip } from 'antd';
import { GiBasketballBall } from 'react-icons/gi';
import { FaBusinessTime, FaDesktop, FaHome } from 'react-icons/fa';

export const Sidebar = ({active,setActive}) => {

  const handleIconClick = (iconNum) => {
    if(iconNum == active){
      // setActive(0)
    }
    else
    {
      setActive(iconNum)
    }
    
  }

  return (
    <div className='px-2'>

      <Tooltip placement="right" title={'Home'}>
        <div onClick={() => handleIconClick(1)} className={`p-2 my-3 rounded-3`} style={active === 1 ? {backgroundColor :'#3A4850'} : {}} data-bs-toggle="tooltip" title="Tooltip Text Here" >
          <FaHome size={24} style={{ color: 'white' }} />
        </div>
      </Tooltip>


      <Tooltip placement="right" title={'Business'}>
        <div onClick={() => handleIconClick(2)} className='p-2 my-3 rounded-3' style={active === 2 ? {backgroundColor :'#3A4850'} : {}}>
          <FaBusinessTime size={24} style={{color:"white"}} />
        </div>        
      </Tooltip>

      <Tooltip placement="right" title={'Sports'}>
        <div onClick={() => handleIconClick(3)} className='p-2 my-3 rounded-3' style={active === 3 ? {backgroundColor :'#3A4850'} : {}}>
          <GiBasketballBall size={24} style={{ color: 'white' }} /> 
        </div>
      </Tooltip>
      
      <Tooltip placement="right" title={'Technology'}>
        <div onClick={() => handleIconClick(4)} className='p-2 my-3 rounded-3' style={active === 4 ? {backgroundColor :'#3A4850'} : {}}>
        <FaDesktop size={24} style={{color:"white"}} />
        </div>
      </Tooltip>
    </div>
  )
}