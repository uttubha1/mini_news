import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import help from "../../assets/NavbarIcons/help.svg"
import profile from "../../assets/NavbarIcons/profile.svg"
import { Divider } from 'antd';
 
export const Navbar = () => {
    const logoClicked =() =>{
        console.log("Clicked");
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg d-flex flex-row" style={{height : '7%'}}>
      <div className="container-fluid"  >
        <div onClick={logoClicked} style={{display:"flex",alignItems:"center"}}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <FaNewspaper size={24} />  
            <p className='m-0 p-0' style={{fontFamily:"Inter, sans-serif", fontWeight:"600",alignItems:"center"}}>Mini News</p>
          </div>
        </div>
    
     
        <div>
          <img  src={help}></img>
          <img style={{marginRight:"10px" ,marginLeft:"20px"}} src={profile}></img>
        </div>
      </div>
    </nav>
      <Divider style={{margin:"0px"}}/>
    </>
  );
};