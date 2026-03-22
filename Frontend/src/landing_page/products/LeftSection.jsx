import React from 'react'

const LeftSection = ({imageURL, productName,productDescription,tryDemo,LearnMore,googlePlay,appStore}) => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center    mt-5">
        <div className="col-lg-8  "> 
          <img src={imageURL} alt="" className='img-fluid w-75' />
          
            </div>
        <div className="col-lg-4 ">  
          <h1  className='fs-4'>{productName}</h1>
          <p className='lh-lg'>{productDescription}</p>
         <div className='mb-3 ' >
           <a  href={tryDemo}>Try Demo <i className="fa fa-arrow-right" aria-hidden="true"></i> </a>
          <a className='mx-5' href={LearnMore}>Learn More <i className="fa fa-arrow-right" aria-hidden="true"></i> </a>
          
         </div>
          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"  className="w-25 img-fluid"alt="" /></a>
          <a className='mx-5' href={appStore}><img src="media/images/appstoreBadge.svg"  className="w-25 img-fluid"alt="" /></a>

          
           </div>

      </div>
    </div>
  )
}

export default LeftSection
