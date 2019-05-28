import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark pt-5">
          <div className="container pt-2">
            <div className="row">
              <div className="col-lg-3 pb-4 mb-2">
                <a
                  className="navbar-brand d-inline-block mb-4"
                  id="wider-a"
                  href="index.html"
                >
                  <img src="assets/pralogonew.png" alt="CreateX" />
                </a>
                <p className="text-sm text-white opacity-50" />
                <ul className="list-icon text-sm pb-2">
                  <li>
                    <i className="fe-icon-map-pin text-white opacity-60" />
                    <a className="navi-link text-white" href="#">
                      &nbsp;650 N Dearborn, Chicago, IL, USA
                    </a>
                  </li>
                  <li>
                    <i className="fe-icon-phone text-white opacity-60" />
                    <a
                      className="navi-link text-white"
                      href="tel:+1212477690000"
                    >
                      &nbsp;0 000 000 0000
                    </a>
                  </li>
                  <li>
                    <i className="fe-icon-mail text-white opacity-60" />
                    <a
                      className="navi-link text-white"
                      href="mailto:support@example.com"
                    >
                      &nbsp;example@example.com
                    </a>
                  </li>
                </ul>
                {/* <a
                  className="social-btn sb-style-6 sb-facebook sb-light-skin"
                  href="#"
                >
                  <i className="socicon-facebook" />
                </a>
                <a
                  className="social-btn sb-style-6 sb-twitter sb-light-skin"
                  href="#"
                >
                  <i className="socicon-twitter" />
                </a>
                <a
                  className="social-btn sb-style-6 sb-youtube sb-light-skin"
                  href="#"
                >
                  <i className="socicon-youtube" />
                </a>
                <a
                  className="social-btn sb-style-6 sb-instagram sb-light-skin"
                  href="#"
                >
                  <i className="socicon-instagram" />
                </a> */}
              </div>
              <div className="col-lg-6">
                <div className="widget widget-light-skin mb-0">
                  <h4 id="no-border" className="widget-title">
                    Useful Links
                  </h4>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget widget-categories widget-light-skin">
                      <ul>
                        <li>
                          <Link to="/home" id="some-margin">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/internship">Internship</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/personnel">Personnel</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widget widget-categories widget-light-skin">
                      <ul>
                        <li>
                          <Link to="/commercial">Commercial</Link>
                        </li>
                        <li>
                          <Link to="/inquiries">Inquiries</Link>
                        </li>
                        <li>
                          <Link
                            to="/transactions"
                            onClick={() => {
                              this.setTimeout(500, window.location.reload())
                            }}
                          >
                            Transactions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3">
                <div className="widget widget-light-skin">
                  <h4 className="widget-title">Our mobile app</h4>
                  <a
                    className="market-btn apple-btn market-btn-light-skin mr-3 mb-3"
                    href="#"
                  >
                    <span className="mb-subtitle">Download on the</span>
                    <span className="mb-title">App Store</span>
                  </a>
                  <a
                    className="market-btn google-btn market-btn-light-skin mr-3 mb-3"
                    href="#"
                  >
                    <span className="mb-subtitle">Download on the</span>
                    <span className="mb-title">Google Play</span>
                  </a>
                  <a
                    className="market-btn windows-btn market-btn-light-skin mr-3 mb-3"
                    href="#"
                  >
                    <span className="mb-subtitle">Download on the</span>
                    <span className="mb-title">Windows Store</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          {/* Subscription*/}
        </footer>
      </div>
    )
  }
}

export default Footer
