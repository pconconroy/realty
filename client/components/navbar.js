import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* Off-Canvas Menu*/}
    <div
      className="offcanvas-container is-triggered offcanvas-container-reverse"
      id="mobile-menu"
    >
      <span className="offcanvas-close">
        <i className="fe-icon-x" />
      </span>
      <div className="px-4 pb-4">
        <h6>Menu</h6>
      </div>
      <div
        className="offcanvas-scrollable-area border-top"
        style={{height: 'calc(100% - 235px)', top: 144}}
      >
        {/* Mobile Menu*/}
        <div className="accordion mobile-menu" id="accordion-menu">
          {/* Home*/}
          <div className="card">
            <div className="card-header">
              <a
                className="mobile-menu-link"
                href="/home"
                onClick={() => {
                  this.setTimeout(50, window.location.reload())
                }}
              >
                Home
              </a>
            </div>
          </div>
          {/* Portfolio*/}
          <div className="card">
            <div className="card-header">
              <a
                className="mobile-menu-link"
                href="/internship"
                onClick={() => {
                  this.setTimeout(50, window.location.reload())
                }}
              >
                Internship
              </a>
            </div>
          </div>
          {/* Blog*/}
          <div className="card">
            <div className="card-header">
              <a
                className="mobile-menu-link"
                href="/about"
                onClick={() => {
                  this.setTimeout(50, window.location.reload())
                }}
              >
                Why Us
              </a>
            </div>
          </div>
          {/* Shop*/}
          <div className="card">
            <div className="card-header">
              <a
                className="mobile-menu-link"
                href="/personnel"
                onClick={() => {
                  this.setTimeout(50, window.location.reload())
                }}
              >
                Team
              </a>
            </div>
          </div>
          {/* Account*/}
          <div className="card">
            <div className="card-header">
              <a
                className="mobile-menu-link"
                href="/commercial"
                onClick={() => {
                  this.setTimeout(50, window.location.reload())
                }}
              >
                Expertise and Inquiries
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="mobile-menu-link"
                href="/saraAbout"
                onClick={() => {
                  this.setTimeout(50, window.location.reload())
                }}
              >
                SARA Capital Markets
              </a>
            </div>
          </div>
          {/* Pages*/}
          {/* <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link" to="/inquiries">
                Inquiries
              </Link>
            </div>
          </div> */}
          {/* Components*/}
          <div className="card">
            <div className="card-header">
              <a
                className="mobile-menu-link"
                href="/transactions"
                onClick={() => {
                  this.setTimeout(50, window.location.reload())
                }}
              >
                Transactions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Navbar: Simple Ghost*/}
    <header className="navbar-wrapper navbar-boxed navbar-simple-ghost">
      <div className="container-fluid">
        <div className="d-table-cell align-middle pr-md-3" id="wider-logo">
          <a className="navbar-brand mr-1" id="wider-a" href="index.html">
            <img src="assets/pralogonew.png" alt="photo" />
          </a>
        </div>
        <div className="d-table-cell w-100 align-middle pl-md-3">
          <div className="navbar justify-content-end justify-content-lg-between">
            {/* Search*/}
            <form className="search-box" method="get">
              <input
                type="text"
                id="site-search"
                placeholder="Type A or C to see suggestions"
              />
              <span className="search-close">
                <i className="fe-icon-x" />
              </span>
            </form>
            {/* Main Menu*/}
            <ul className="navbar-nav d-none d-lg-block">
              {/* Home*/}
              <li className="nav-item mega-dropdown-toggle">
                <a
                  className="nav-link"
                  href="/home"
                  onClick={() => {
                    this.setTimeout(50, window.location.reload())
                  }}
                >
                  Home
                </a>
              </li>
              {/* Portfolio*/}

              {/* Blog*/}
              <li className="nav-item mega-dropdown-toggle">
                <a
                  className="nav-link"
                  href="/about"
                  onClick={() => {
                    this.setTimeout(50, window.location.reload())
                  }}
                >
                  Why Us
                </a>
              </li>
              {/* Shop*/}
              <li className="nav-item mega-dropdown-toggle">
                <a
                  className="nav-link"
                  href="personnel"
                  onClick={() => {
                    this.setTimeout(50, window.location.reload())
                  }}
                >
                  Team
                </a>
              </li>
              {/* Account*/}
              <li className="nav-item dropdown-toggle">
                <a
                  className="nav-link"
                  href="/commercial"
                  onClick={() => {
                    this.setTimeout(50, window.location.reload())
                  }}
                >
                  Expertise and Inquiries
                </a>
              </li>
              {/* Pages*/}
              {/* <li className="nav-item dropdown-toggle">
                <Link className="nav-link" to="/inquiries">
                  Inquiries
                </Link>
              </li> */}
              {/* Components*/}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/transactions"
                  // onClick={() => {
                  //   this.setTimeout(500, window.location.reload())
                  // }}
                >
                  Transactions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/saraAbout"
                  onClick={() => {
                    this.setTimeout(500, window.location.reload())
                  }}
                >
                  SARA Capital Markets
                </a>
              </li>
              <li className="nav-item dropdown-toggle">
                <a
                  className="nav-link"
                  href="/internship"
                  onClick={() => {
                    this.setTimeout(50, window.location.reload())
                  }}
                >
                  Internship
                </a>
              </li>
              {/* <li className="nav-item">
                <p
                  className="nav-link"
                  style={{color: 'red', fontWeight: 'bold', fontSize: '150%'}}
                  onClick={() => {
                    this.setTimeout(500, window.location.reload())
                  }}
                >
                  Jackson Office Now Open!
                </p>
              </li> */}
            </ul>
            <div>
              <ul className="navbar-buttons d-inline-block align-middle">
                <li className="d-block d-lg-none">
                  <a href="#mobile-menu" data-toggle="offcanvas">
                    <i className="fe-icon-menu" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
)

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
