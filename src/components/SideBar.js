import React from 'react';
import '../App.css'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
  <div class="sidebar-m">
    <div class="sidebar-nav "  tabindex="-1" id="sidebar" >
      <div class="d-scroll">
        <nav class="navbar-light">
          <div className="data-scroll">
          <ul class="navbar-nav py-3 px-2">
            <li class="home nav-link">
              <Link to="/home" class="px-3 nav-link"><p>Home</p></Link>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#customer" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>CUSTOMER</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="customer">
                <Link to="/manage-customer" class='nav-link sub'>Manage Customer</Link>
              </div>
              <div class="collapse px-4" id="customer">
                <Link to="/corporate-customer"class='nav-link sub'>Corporate Customer</Link>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#operations" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>OPERATIONS</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-3" id="operations">
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#origin" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2 sub'>Origin Hub</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="origin">
                <a class='nav-link sub' href="">Arivals</a>
              </div>
              <div class="collapse px-4" id="origin">
                <a class='nav-link sub' href="">Weighing</a>
              </div>
              <div class="collapse px-4" id="origin">
                <a class='nav-link sub' href="">Debagging</a>
              </div>
              <div class="collapse px-4" id="origin">
                <a class='nav-link sub' href="">Sorting</a>
              </div>
              </div>
              <div class="collapse px-3" id="operations">
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#dmb" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2 sub'>DBM</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="dmb">
                <a class='nav-link sub' href="">Arivals</a>
              </div>
              </div>
              <div class="collapse px-3" id="operations">
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#destination" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2 sub'>Destination Hub</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="destination">
                <a class='nav-link sub' href="">Arival</a>
              </div>
              <div class="collapse px-4" id="destination">
                <a class='nav-link sub' href="">Weighing</a>
              </div>
              <div class="collapse px-4" id="destination">
                <a class='nav-link sub' href="">Debagging</a>
              </div>
              <div class="collapse px-4" id="destination">
                <a class='nav-link sub' href="">Sorting</a>
              </div>
              </div>
              <div class="collapse px-3" id="operations">
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#delivery" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2 sub'>Delivery Station</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="delivery">
                <a class='nav-link sub' href="">Arival</a>
              </div>
              <div class="collapse px-4" id="delivery">
                <a class='nav-link sub' href="">Delivery</a>
              </div>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#service" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>SERVICE</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="service">
                <a class='nav-link sub' href="#">Manage Service</a>
              </div>
              <div class="collapse px-4" id="service">
                <a class='nav-link sub' href="">Manage Service Price</a>
              </div>
              <div class="collapse px-4" id="service">
                <a class='nav-link sub' href="">Manage Service Location</a>
              </div>
              <div class="collapse px-4" id="service">
                <a class='nav-link sub' href="">Manage Special Service Price</a>
              </div>
              <div class="collapse px-4" id="service">
                <a class='nav-link sub' href="">Manage Fedex Service Loc</a>
              </div>
              <div class="collapse px-4" id="service">
                <a class='nav-link sub' href="">Freight LP</a>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#report" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>REPORT</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="report">
                <a class='nav-link sub' href="#">RSM Transaction Report</a>
              </div>
              <div class="collapse px-4" id="report">
                <a class='nav-link sub' href="#">FSM Transaction Report</a>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#settings" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>SETTINGS</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="settings">
                <a class='nav-link sub' href="#">Change Password</a>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#center" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>CENTER</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="center">
                <a class='nav-link sub' href="#">Manage Frontline</a>
              </div>
              <div class="collapse px-4" id="center">
                <a class='nav-link sub' href="">Manage Center</a>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#broadcast" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>BROADCAST</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="broadcast">
                <a class='nav-link sub' href="#">SMS Template</a>
              </div>
              <div class="collapse px-4" id="broadcast">
                <a class='nav-link sub' href="">Broadcast</a>
              </div>
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#profile" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>PROFILE</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              {/* <div class="collapse px-4" id="profile">
                <a class='nav-link sub' href="#">Manage Customer</a>
              </div> */}
            </li>
            <li>
              <a class="nav-link px-3 sidebar-link d-flex align-items-center" data-bs-toggle="collapse" href="#admin" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span className='mb-2'>ADMIN</span>
                <span className="right-icon ms-auto"><FontAwesomeIcon icon={faChevronRight} /></span>
              </a>
              <div class="collapse px-4" id="admin">
                <a class='nav-link sub' href="#">Banks</a>
              </div>
              <div class="collapse px-4" id="admin">
                <a class='nav-link sub' href="">Airports</a>
              </div>
              <div class="collapse px-4" id="admin">
                <a class='nav-link sub' href="">City</a>
              </div>
              <div class="collapse px-4" id="admin">
                <a class='nav-link sub' href="">Towns</a>
              </div>
              <div class="collapse px-4" id="admin">
                <a class='nav-link sub' href="">Fedex City</a>
              </div>
              <div class="collapse px-4" id="admin">
                <a class='nav-link sub' href="">Manage Onforwardings</a>
              </div>
            </li>
          </ul>
          </div>
        </nav>
      </div>
    </div>
   </div>
  )
}

export default SideBar