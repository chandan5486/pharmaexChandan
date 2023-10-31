import React from 'react'
import Image from 'next/image'
export const FooterAddress = () => {
  return (
    <>
    <ul className='contactList'>
        <li><span><Image 
                  src={"/images/location.svg"} 
                  width={"20"}
                  height={"24"}
                  alt="Logo"
                  /></span>No. 3, Ground Floor, Part 1 Market, Greater Kailash I, Greater Kailash, Delhi - 110048</li>
        <li><span><Image 
                  src={"/images/email.svg"} 
                  width={"24"}
                  height={"22"}
                  alt="Logo"
                  /></span> <a href='mailto:info@pharmmaex@gmail.com'>info@pharmmaex@gmail.com</a></li>
        <li><span><Image 
                  src={"/images/tel.svg"} 
                  width={"24"}
                  height={"24"}
                  alt="Logo"
                  /></span> <a href='tel:+91-925 800 2828'>+91-925 800 2828</a>, <a href='tel:+91-925 800 2828'>+91-925 800 2828</a></li>

    </ul>
    </>
  )
}
