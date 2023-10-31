import React from 'react'
import { FooterLogoSocial } from './FooterLogoSocial'
import { FooterImageWidget } from './FooterImageWidget'
import { FooterNav } from './FooterNav'
import { FooterAddress } from './FooterAddress'
import { FooterCopyRights } from './FooterCopyRights'

export const Footer = () => {
  return (
    <>
    <footer className='siteFooter'>
    <FooterLogoSocial />
    <div className='container'>
        <div className='row'>
            <div className='col-sm-4'><FooterAddress/></div>
            <div className='col-sm-4'><FooterNav/></div>
            <div className='col-sm-4'><FooterImageWidget /></div>
        </div>
    </div>
    <FooterCopyRights />
    
    </footer>
    </>
  )
}
