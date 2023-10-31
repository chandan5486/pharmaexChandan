import React from 'react';
import Image from 'next/image';

export const FooterLogoSocial = () => {
  return (
    <>
    <div className='footerTop'>
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6 siteBrand'>
                <a href='#'><Image 
                  src={"/images/logo.svg"} 
                  width={"434"}
                  height={"90"}
                  alt="Logo"
                  /></a>
            </div>
            <div className='col-sm-6 socialBox'>
                <ul className='socialList'>
                    <li><a href='#'><Image 
                  src={"/images/facebook.svg"} 
                  width={"80"}
                  height={"80"}
                  alt="Logo"
                  /></a></li>
                    <li><a href='#'><Image 
                  src={"/images/instagram.svg"} 
                  width={"80"}
                  height={"80"}
                  alt="Logo"
                  /></a></li>
                    <li><a href='#'><Image 
                  src={"/images/twitter.svg"} 
                  width={"80"}
                  height={"80"}
                  alt="Logo"
                  /></a></li>
                    <li><a href='#'><Image 
                  src={"/images/linkedin.svg"} 
                  width={"80"}
                  height={"80"}
                  alt="Logo"
                  /></a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
