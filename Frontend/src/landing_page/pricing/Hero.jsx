import React from 'react'

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className='text-muted fs-5 mt-3'>Free equity invesments and flat ₹20 traday and ₹60 trades   </h3>
      </div>
      <div className="row p-5 mt-5 d-flex justify-content-between " >
        <div className="col-4 p-5 text-muted d-flex flex-column gap-3">
          <img src="media/images/pricingEquity.svg" alt="" className='img-fluid' />
          <h1 className='fs-3'>Free equity delivery</h1>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5 text-muted d-flex flex-column gap-3">
          <img src="media/images/intradayTrades.svg" alt="" className='img-fluid' />
          <h1 className='fs-3'>Free equity delivery</h1>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5 text-muted d-flex flex-column gap-3">
          <img src="media/images/pricingEquity.svg" alt="" className='img-fluid' />
          <h1 className='fs-3'>Free equity delivery</h1>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>

      </div>
    </div>
  )
}

export default Hero
