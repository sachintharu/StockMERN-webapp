import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='border-bottom  mb-2  '>

      <div className="container p-2  " >

      <nav className="navbar navbar-expand-lg " style={{backgroundColor:"white"}}>
        <div className="container-fluid">

        <Link to="/">
          <img src="media/images/logo.svg" alt="Logo" className='img-fluid' style={{width:"25%"}} />
        </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex gap-3">

              <li className="nav-item">
                <Link className="nav-link active" to="/signup">Signup</Link>
              </li>

              <li className="nav-item">
                 <Link className="nav-link active" to="/about">About</Link>
              </li>

              <li className="nav-item">
                 <Link className="nav-link active" to="/product">Product</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>

              <li className="nav-item">
                 <Link className="nav-link active" to="/support">Support</Link>
              </li>
               <li className="nav-item " style={{margin:"auto 0"}}>
                <i className="fa fa-bars " aria-hidden="true" ></i>
              </li>

            </ul>

          </div>
        </div>
      </nav >

    </div>
    </nav>
  )
}

export default Navbar