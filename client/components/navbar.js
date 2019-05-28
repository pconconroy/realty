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
              <Link className="mobile-menu-link active" to="/home">
                Home
              </Link>
            </div>
          </div>
          {/* Portfolio*/}
          <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link" to="/internship">
                Internship
              </Link>
            </div>
          </div>
          {/* Blog*/}
          <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link" to="/about">
                About Us
              </Link>
            </div>
          </div>
          {/* Shop*/}
          <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link" to="/personnel">
                Personnel
              </Link>
            </div>
          </div>
          {/* Account*/}
          <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link" to="/commercial">
                Commercial
              </Link>
            </div>
          </div>
          {/* Pages*/}
          <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link" to="/inquiries">
                Inquiries
              </Link>
            </div>
          </div>
          {/* Components*/}
          <div className="card">
            <div className="card-header">
              <Link
                className="mobile-menu-link"
                to="/transactions"
                onClick={() => {
                  this.setTimeout(500, window.location.reload())
                }}
              >
                Transactions
              </Link>
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
            <img src="assets/pralogonew.png" alt="CreateX" />
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
              <li className="nav-item mega-dropdown-toggle active">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              {/* Portfolio*/}
              <li className="nav-item dropdown-toggle">
                <Link className="nav-link" to="/internship">
                  Internship
                </Link>
              </li>
              {/* Blog*/}
              <li className="nav-item mega-dropdown-toggle">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              {/* Shop*/}
              <li className="nav-item mega-dropdown-toggle">
                <Link className="nav-link" to="personnel">
                  Personnel
                </Link>
              </li>
              {/* Account*/}
              <li className="nav-item dropdown-toggle">
                <Link className="nav-link" to="/commercial">
                  Commercial
                </Link>
              </li>
              {/* Pages*/}
              <li className="nav-item dropdown-toggle">
                <Link className="nav-link" to="/inquiries">
                  Inquiries
                </Link>
              </li>
              {/* Components*/}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/transactions"
                  onClick={() => {
                    this.setTimeout(500, window.location.reload())
                  }}
                >
                  Transactions
                </Link>
              </li>
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
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
