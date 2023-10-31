import React from 'react'
import { SponsorsType } from './SponsorsType'

export const Sponsors = () => {
  return (
    <>
    <section className='sponsorsSec'>
        <div className='container'>
            <h4><small>Pharma Members</small>PharmmaEx-Sponsors</h4>
            <SponsorsType/>
            <SponsorsType/>
            <SponsorsType/>
            
        </div>
    </section>
    </>
  )
}
