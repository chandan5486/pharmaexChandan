import React from 'react'
import Image from 'next/image'

export const ExploreEvents = () => {
  return (
    <>
    <section className='exploreEvents'>
        <div className='container'>
            <h3><small>Events</small>Explore Our Events</h3>
            <p>Discover a multitude of pharmaceutical events and exhibitions hosted by PharmmaEx. From showcasing cutting-edge pharmaceutical products to facilitating networking opportunities, our events are tailored to meet the diverse needs of the industry. Stay updated with our event calendar and join us in shaping the future of pharmaceuticals.</p>
            <div className='row'>
                <ul className='eventList'>
                    <li>
                        <div className='contentBox'>
                            <div className='eventDate'>6 July, 2019</div>
                            <div className='location'>Mumbai</div>
                            <div className='imgBox'><Image src={'/images/event-01.svg'} width={'150'} height={'150'} alt='Auther' /></div>
                        </div>
                    </li>
                    <li>
                        <div className='contentBox'>
                            <div className='eventDate'>6 July, 2019</div>
                            <div className='location'>Mumbai</div>
                            <div className='imgBox'><Image src={'/images/event-01.svg'} width={'150'} height={'150'} alt='Auther' /></div>
                        </div>
                    </li>
                    <li>
                        <div className='contentBox'>
                            <div className='eventDate'>6 July, 2019</div>
                            <div className='location'>Mumbai</div>
                            <div className='imgBox'><Image src={'/images/event-01.svg'} width={'150'} height={'150'} alt='Auther' /></div>
                        </div>
                    </li>
                    <li>
                        <div className='contentBox'>
                            <div className='eventDate'>6 July, 2019</div>
                            <div className='location'>Mumbai</div>
                            <div className='imgBox'><Image src={'/images/event-01.svg'} width={'150'} height={'150'} alt='Auther' /></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}
