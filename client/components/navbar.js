import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <header className="navbar-wrapper navbar-sticky">
      <div className="d-table-cell align-middle pr-md-3">
        <a className="navbar-brand mr-1" href="index.html">
          <img src="/assets/PRALOGO.jpg" alt="CreateX" />
        </a>
      </div>
      <div className="d-table-cell w-100 align-middle pl-md-3">
        <div className="navbar-top d-none d-lg-flex justify-content-between align-items-center">
          <div>
            <a className="navbar-link mr-3" href="tel:+1212477690000" />
            <a className="navbar-link mr-3">
              325 W Huron St # 412, Chicago, IL 60654
            </a>
          </div>
          <div />
        </div>
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
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            {/* Portfolio*/}
            <li className="nav-item dropdown-toggle">
              <Link className="nav-link" to="/Commercial">
                Commercial
              </Link>
            </li>
            {/* Blog*/}
            <li className="nav-item mega-dropdown-toggle">
              <Link className="nav-link" to="/Inquiries">
                Inquiries
              </Link>
            </li>
            {/* Shop*/}
            <li className="nav-item mega-dropdown-toggle">
              <Link className="nav-link" to="/Transactions">
                Transactions
              </Link>
            </li>
            {/* Account*/}
            <li className="nav-item dropdown-toggle">
              <Link className="nav-link" to="About">
                About
              </Link>
            </li>
            {/* Pages*/}
            <li className="nav-item dropdown-toggle">
              <Link className="nav-link" to="/Personnel">
                Personnel
              </Link>
            </li>
            {/* Components*/}
          </ul>
          <div>
            <ul className="navbar-buttons d-inline-block align-middle mr-lg-2">
              <li className="d-block d-lg-none">
                <a href="#mobile-menu" data-toggle="offcanvas">
                  <i className="fe-icon-menu" />
                </a>
              </li>
            </ul>
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
