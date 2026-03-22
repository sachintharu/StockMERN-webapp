import React from 'react'

const Pricing = () => {
  return (
    <section className='container mt-5'>
      <div className="row align-items-center">
        {/* Left column */}
        <div className="col-lg-6 d-flex flex-column justify-content-center gap-3">
          <h1 className='fs-5'>Unbeatable pricing</h1>
          <p className='text-muted'>
            We pioneered the concept of discount broking and price transparency in India. 
            Flat fees and no hidden charges.
          </p>
          <a style={{textDecoration:"none"}} href="#">
            See Pricing <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right column */}
        <div className="col-lg-6">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-4 d-flex  align-items-center">
              <img src="media/images/pricingEquity.svg" alt="pricingEquity" className='img-fluid w-75' />
              <p className='text-muted mt-2' style={{fontSize:"12px"}}>Free account opening</p>
            </div>
            <div className="col-4 d-flex align-items-center">
              <img src="media/images/pricingEquity.svg" alt="pricingEquity" className='img-fluid w-75' />
              <p className='text-muted mt-2' style={{fontSize:"12px"}}>Free account opening</p>
            </div>
            <div className="col-4 d-flex align-items-center">
              <img src="media/images/pricingEquity.svg" alt="pricingEquity" className='img-fluid w-75' />
              <p className='text-muted mt-2' style={{fontSize:"12px"}}>Free account opening</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing