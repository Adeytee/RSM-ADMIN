import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
<div class="">
<nav className="navbar navbar-expand-lg bg-1 nav">
  <div className="container-fluid">
        <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >
          <span class="navbar-toggler-icon" data-bs-target="#offcanvasExample" ></span>
        </button>
        <a class="navbar-brand text-white me-auto fs-6" href="#">RSE Ship Manager</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item d-flex align-items-center">
        <img src='img/profilepicc.png' className="img-fluid img-rounded rounded-circle bg-warning profilepic" alt=""/>
          <a className="nav-link text-white" href="#">Aogunlabi Jones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#"> <FontAwesomeIcon icon={faArrowRightFromBracket} /><span className=''>Log out</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    ) 
}

export default NavBar