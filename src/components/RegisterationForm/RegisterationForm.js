import React from 'react'

export const RegisterationForm = () => {
  return (
    <>
    <section className="registration-section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md 12 col-lg-12">
							<h3><small>Free registration</small>Visitor Registration Form</h3>
							<form className="free-registration-form" action="">
								<div className="form-box">
									<div className="form-item">
										<label for="fname">First Name:</label>
										<input type="text" id="fname" name="fname" value="" placeholder="First Name" />
									</div>
									<div className="form-item">
										<label for="lname">Last Name:</label>
										<input type="text" id="lname" name="lname" value="" placeholder="Last Name" />
									</div>
									<div className="form-item">
										<label for="email">Enter Email:</label>
										<input type="text" id="email" name="email" value="" placeholder="Enter Email"/>
									</div>
									<div className="form-item">
										<label for="phone">Phone Number:</label>
										<input type="number" id="phone" name="phone" value="" placeholder="Phone Number"min-length="10" maxlength="10"/>
									</div>
									<div className="form-item">
										<label for="jtitle">Job Title:</label>
										<input type="text" id="jtitle" name="jtitle" value="" placeholder="Job Title"/>
									</div>
									<div className="form-item">
										<label for="company">Company:</label>
										<input type="text" id="company" name="company" value="" placeholder="Company"/>
									</div>
								</div>

								<button type="submit"  className="submit-reg-form">Submit Now</button>
							  </form> 
						</div>
					</div>
				</div>
			</section>
    </>
  )
}
