
import React from 'react'

 const Awards = () => {
  return (
  <div className="container mt-5 ">
    <div className="row">
      <div className=" col-lg-6 col-12 text-center text-lg-start">
    <img src="media/images/largestBroker.svg" alt="largestBroker" className='img-fluid' />
      </div>
      <div className="col-lg-6  col-12 text-center text-lg-start mt-5 ">

<h1>Largest stock broker in Nepal</h1>
<p>+2 million Zerodha clients contribute to over 15% of all retial order volumes in india daily by trading and investing in:</p>
<div className="row mt-5 lh-lg">
  <div className="col-6">
    <ul className=''>
      <li>Stock & IPOs</li>
      <li>Direct mutual funds</li>
      <li>Bonds and Securities </li>
    </ul>
  
  </div>
  <div className="col-6">
    <ul>
      <li>Futures and Options</li>
      <li>Commdity derivatives</li>
      <li>Currency derivatives</li>
    </ul>
  </div>
  <img src="media\images\pressLogos.png" alt="PressLogos"  />
</div>
      </div>
    </div>
  </div>
  )
}

export default Awards;
