import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  return (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link active" aria-current="page" to="/Homee">Home</NavLink>
          <NavLink className="nav-link" to="/Aboute">About</NavLink>
          <NavLink className="nav-link" to="/Contects">Contects</NavLink>

          {/* <a className="nav-link" href="#">Pricing</a> */}
          {/* <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a> */}
        </div>
      </div>
    </div>
  </nav>
</div>

    
  )
}

export default Header
