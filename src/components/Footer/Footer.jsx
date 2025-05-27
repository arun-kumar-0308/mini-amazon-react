import React from 'react'
import './Footer.css';
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
} from "@heroicons/react/outline";
import Logo from "../../assets/logo.png"


function Footer() {
  return (
    <>
    <div className='cFooterWrapper'>
        <hr/>

        <div className='cFooter'>
          
          <div className='logo'>
            <img src={Logo} alt="" />
            <span>Arun-Amazon</span>

          </div>

         <div className='block'>
            <div className='detial'>
            <span className='links'>Contact Us</span>
                <span className='pngLine'>
                    <LocationMarkerIcon className='icon'/>
                        <span>Anna Nagar , Chennai 600047</span>
                </span>
                <span className='pngLine'>
                    <PhoneIcon className='icon'/>
                        <span>+91 9360857762</span>
                </span>
               
            </div>
        </div>

        <div className='block'>
            <div className='detial'>
            <span className='links'>Account</span>
                <span className='pngLine'>
                    <LoginIcon className='icon'/>
                        <span>Sign in</span>
                </span>
                <span className='pngLine'>
                    <InboxIcon className='icon'/>
                        <span>aruntkumar037@gmail</span>
                </span>
            </div>
        </div>

        <div className='block'>
            <div className='detial'>
            <span className='links'>Users</span>
                <span className='pngLine'>
                    <UserIcon className='icon'/>
                    <span>About Us</span>
                </span>
            </div>
        </div>

        <div className='block'>
            <div className='detial'>
                <span className='links'>Links</span>
               
                <span className='pngLine'>
                    <LinkIcon className='icon'/>
                    <a href="https://www.linkedin.com/in/arunkumar0308/" target="_blank" rel="noopener noreferrer">
  Visit Example
</a>
                </span>
            </div>
        </div>
        

        </div>
        <div className='copyRight'>
            <span>Copyright @2025 Arun-Amazon, Inc</span>
            <span>All Rights Reserved</span>
        </div>
    </div>





    </>
  )
}

export default Footer