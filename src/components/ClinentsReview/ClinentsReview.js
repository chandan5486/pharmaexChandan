import React from 'react'
import Image from 'next/image'

export const ClinentsReview = () => {
  return (
    <>
    <section className='clientsReview'>
        <div className='container'>
            <h3><small>Testimonials</small>What Our Clients Say</h3>
            <div className='reviewBox'>
                <div className='row'>
                    <ul className='reviewList'>
                        <li>
                            <div className='innerBox'>
                                <div className='imgBox'>
                                    <Image src={'/images/auther-01.jpg'} width={'150'} height={'150'} alt='Auther' />
                                    <div className='quoteBox'><Image src={'/images/quote.svg'} width={'33'} height={'24'} alt='Auther' /></div>
                                    
                                    </div>
                                <div className='contentBox'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis scelerisque sed massa sit aliquet nisi diam magna. Habitasse massa augue mi nulla. Diam nibh faucibus hendrerit morbi vehicula. Et enim nullam nulla maecenas cursus.</p>
                                    <div className='autherName'>James Smith</div>
                                    <div className='autherPosi'>General Manager</div>
                                    <div className='autherDesi'>XYZ Pharmaceuticals Pvt. Ltd.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='innerBox'>
                                <div className='imgBox'>
                                <Image src={'/images/auther-01.jpg'} width={'150'} height={'150'} alt={'Auther'} />
                                <div className='quoteBox'><Image src={'/images/quote.svg'} width={'33'} height={'24'} alt='Auther' /></div>

                                </div>
                                <div className='contentBox'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis scelerisque sed massa sit aliquet nisi diam magna. Habitasse massa augue mi nulla. Diam nibh faucibus hendrerit morbi vehicula. Et enim nullam nulla maecenas cursus.</p>
                                    <div className='autherName'>James Smith</div>
                                    <div className='autherPosi'>General Manager</div>
                                    <div className='autherDesi'>XYZ Pharmaceuticals Pvt. Ltd.</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
