import React from 'react'
import Image from 'next/image'
export const ClientsLogo = () => {
  return (
    <>
    <section className='clientlogo'>
        <div className='container'>
            <div className='row'>
                <ul className='logoList'>
                    <li><Image src={'/images/logo.svg'} height={50} width={50} alt="Logo" /></li>
                    <li><Image src={'/images/logo.svg'} height={50} width={50} alt="Logo" /></li>
                    <li><Image src={'/images/logo.svg'} height={50} width={50} alt="Logo" /></li>
                    <li><Image src={'/images/logo.svg'} height={50} width={50} alt="Logo" /></li>
                    <li><Image src={'/images/logo.svg'} height={50} width={50} alt="Logo" /></li>
                    <li><Image src={'/images/logo.svg'} height={50} width={50} alt="Logo" /></li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}
