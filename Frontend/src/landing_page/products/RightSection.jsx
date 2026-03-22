import React from 'react'

const RightSection = ({ imageURL, productName, productDescription, LearnMore }) => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-between align-items-center    mt-5">
        <div className="col-lg-4  ">
          <h1 className='fs-4'>{productName}</h1>
          <p className='lh-lg'>{productDescription}</p>

          <a className='' href={LearnMore}>Learn More <i className="fa fa-arrow-right" aria-hidden="true"></i> </a>


        </div>
        <div className='col-lg-2'></div>
        <div className="col-lg-6  ">
          <img src={imageURL} alt="" className='img-fluid w-100' />



        </div>

      </div>
    </div>

  )
}

export default RightSection
