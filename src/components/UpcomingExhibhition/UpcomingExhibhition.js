import React from 'react'
import Image from 'next/image'
export const UpcomingExhibhition = () => {
  return (
    <>
    <section className="exhibhition-section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md 12 col-lg-12">
							<h3><small>Upcoming Pharma Expo</small>Our Upcoming Exhibhition</h3>
							<div className="exhibhition-box">
								<div className="exhibhition-img">
                                <Image 
                  src={"/images/exhibhition.png"} 
                  width={"1400"}
                  height={"585"}
                  alt="Logo"
                  />
                                        
									<div className="btn-box">
										<span className="view-large">View large Map</span>
										<span className="download-floor">Download Floor Plan</span>
										<span className="download-broucher">Download Broucher</span>
									</div>
								</div>
								<div className="exhibhition-content">
									<p className="exhibhition-title">PharmaEx is launching soon...In <span>Mumbai 2023</span></p>
									<div className="exhibhition-details">
										<div className="exhibhition-date"><span className="icon"><Image src={'/images/clander.svg'} height={'32'} width={'28'} alt={'Icon'} /></span> <span>December 02-03, 2023 <br /> (Saturday-Sunday)</span></div>
										<div className="exhibhition-location"><span className="icon"><Image src={'/images/location.svg'} height={'32'} width={'26'} alt={'Icon'} /></span> <span>Bombay Exhibhition Center Mumbai , Goregaon, <br /> Westran Expressway Highway, Mumbai, Mumbai,India</span></div>
										<div className="exhibhition-time"><span className="icon"><Image src={'/images/watch.svg'} height={'32'} width={'32'} alt={'Icon'} /></span> <span>10:00 AM - 06:00 PM <br /> Business</span></div>
									</div>
								</div>
								<a href="#" className="registr-now">Free Register Now</a>
							</div>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}
