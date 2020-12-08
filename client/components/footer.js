import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div>
        <section className="bg-gradient py-4" id="new-gradient">
          <div
            className="container position-relative bg-no-repeat bg-center py-5 text-center"
            id="fill-image"
            style={{backgroundImage: 'url(assets/chiskyline-min.jpg)'}}
          >
            <h2 className="block-title text-white mt-5 mb-4">
              Why Prairie Realty Advisors?
              <small className="text-white">
                We are a leading company with over 25 years of Experience
              </small>
            </h2>
            <Link
              className="btn btn-style-4 btn-light mb-5"
              to="/inquiries"
              onClick={() => {
                this.setTimeout(50, window.location.reload())
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
        <footer className="bg-dark pt-5">
          <div className="container pt-2" id="add-padding-to-footer">
            <div className="row">
              <div className="col-lg-3 pb-4 mb-2">
                <a
                  className="navbar-brand d-inline-block mb-4"
                  id="wider-a"
                  href="index.html"
                >
                  <img src="assets/pralogonew.png" alt="photo" />
                </a>
                <p className="text-sm text-white opacity-50" id="small-disc">
                  This site is maintained by Prairie Realty Advisors, Inc.,
                  Information@prairierealtyadvisors.com While Prairie Realty
                  Advisors, Inc. has worked to ensure that all data contained
                  herein is accurate and all information has been provided from
                  sources we believe are reliable, Prairie Realty Advisors, Inc.
                  makes no representations nor warranties and assumes no
                  liability for any errors, omissions, or inaccuracies in the
                  information provided either expressed or implied as to the
                  accuracy of the information. provided herein © ~ 2019, Prairie
                  Realty Advisors, Inc. • 650 N Dearborn, Suite 500 • Chicago •
                  IL 60654 • (312) 220-0051
                </p>
                <p className="text-sm text-white opacity-50" />
                <ul className="list-icon text-sm pb-2">
                  <li>
                    <i className="fe-icon-map-pin text-white opacity-60" />
                    <a
                      className="navi-link text-white"
                      href="https://goo.gl/maps/aep1cCdZwXEEV7dp6"
                    >
                      &nbsp;Chicago Office: <br />
                      650 N Dearborn St, Suite 500, Chicago, IL, 60657
                    </a>
                  </li>
                  <li>
                    <i className="fe-icon-map-pin text-white opacity-60" />
                    <a
                      className="navi-link text-white"
                      href="https://goo.gl/maps/aep1cCdZwXEEV7dp6"
                    >
                      &nbsp;Jackson Office: <br />
                      970 W. Broadway, STE E-406 Jackson, WY 83001
                    </a>
                  </li>
                  <li>
                    <i className="fe-icon-phone text-white opacity-60" />
                    <a className="navi-link text-white" href="tel:+13122200051">
                      &nbsp;312 220 0051
                    </a>
                  </li>
                  <li>
                    <i className="fe-icon-mail text-white opacity-60" />
                    <a
                      className="navi-link text-white"
                      href="mailto:john.siff@prairierealtyadvisors.com"
                    >
                      &nbsp;john.siff@prairierealtyadvisors.com
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
              <div className="col-lg-6" id="vert-align-contain">
                <div className="widget widget-light-skin mb-0">
                  <h4 id="no-border" className="widget-title">
                    Useful Links
                  </h4>
                </div>
                <div className="row" id="vert-align">
                  <div className="col-md-6">
                    <div className="widget widget-categories widget-light-skin">
                      <ul>
                        <li>
                          <Link
                            to="/home"
                            id="some-margin"
                            onClick={() => {
                              this.setTimeout(50, window.location.reload())
                            }}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/internship"
                            onClick={() => {
                              this.setTimeout(50, window.location.reload())
                            }}
                          >
                            Internship
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            onClick={() => {
                              this.setTimeout(50, window.location.reload())
                            }}
                          >
                            Why Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/personnel"
                            onClick={() => {
                              this.setTimeout(50, window.location.reload())
                            }}
                          >
                            Personnel
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widget widget-categories widget-light-skin">
                      <ul>
                        <li>
                          <Link
                            to="/commercial"
                            onClick={() => {
                              this.setTimeout(50, window.location.reload())
                            }}
                          >
                            Expertise and Inquiries
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/saraAbout"
                            onClick={() => {
                              this.setTimeout(50, window.location.reload())
                            }}
                          >
                            SARA Capital Markets
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/inquiries">Inquiries</Link>
                        </li> */}
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
