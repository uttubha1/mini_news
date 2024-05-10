import React from 'react';
import Logo from "../../assets/NavbarIcons/Logo.svg"
import help from "../../assets/NavbarIcons/help.svg"
import profile from "../../assets/NavbarIcons/profile.svg"
import { Link } from 'react-router-dom';
// import { Tabs } from '../tabs/Tabs';
 
export const Navbar = () => {
    const logoClicked =() =>{
        console.log("Clicked");
    }
  return (
    <nav className="navbar navbar-expand-lg d-flex flex-row" style={{height : '7%'}}>
      <div className="container-fluid"  >
    <div onClick={logoClicked} style={{display:"flex",alignItems:"center"}}>
    <Link className="navbar-brand d-flex flex-row" to='/' style={{  }}>
          <img  src={Logo} className="d-inline-block align-text-top" alt="Logo" style={{alignItems:"center", marginRight:"10px"}} />
          <p className='m-0 p-0' style={{fontFamily:"Inter, sans-serif", fontWeight:"600",alignItems:"center"}}>Pepper analytics</p>
        </Link>
        <div>
          {/* <Tabs/> */}
        </div>
    </div>
    
     
        <div>
          
          <img  src={help}></img>
          <img style={{marginRight:"10px" ,marginLeft:"20px"}} src={profile}></img>
          </div>
      </div>
    </nav>
  );
};