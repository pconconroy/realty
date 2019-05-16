import React, {Component} from 'react'
import MobileMenu from './mobile-menu'

class Personnel extends Component {
  render() {
    return (
      <div className="about">
        {' '}
        {/* Team*/}
        <section className="container pb-5">
          <h2 className="h3 block-title text-center mb-4">
            Meet Our Team<small>People behind your great experience</small>
          </h2>
          <div className="row">
            {/* Team member*/}
            <div className="col-lg-3 col-sm-6">
              <div className="team-card-style-1 mx-auto">
                <div className="team-card-inner">
                  <div className="team-thumb">
                    <img
                      src="/assets/siffphoto.jpeg"
                      alt="Team Member Picture"
                    />
                  </div>

                  <a className="team-contact-link" href="tel:+19871625346">
                    <i className="fe-icon-phone" />&nbsp;(312) 220-0051/ (312)
                    543-0134 (cellular)
                  </a>
                  <a
                    className="team-contact-link"
                    href="mailto:info@example.com"
                  >
                    <i className="fe-icon-mail" />&nbsp;john.siff@prairierealtyadvisors.com
                  </a>
                </div>
                <span className="team-position">President</span>
                <h4 className="team-name">John F. Siff</h4>
              </div>
            </div>
            {/* Team member*/}
            <div className="col-lg-3 col-sm-6">
              <div className="team-card-style-1 mx-auto">
                <div className="team-card-inner">
                  <div className="team-thumb">
                    <img
                      id="team-pic-bigger"
                      src="/assets/sandypic.jpeg"
                      alt="Team Member Picture"
                    />
                  </div>

                  <a className="team-contact-link" href="tel:+57872336590">
                    <i className="fe-icon-phone" />&nbsp;(312) 220-0053 / (312)
                    953-3298 (cellular)
                  </a>
                  <a
                    className="team-contact-link"
                    href="mailto:info@example.com"
                  >
                    <i className="fe-icon-mail" />&nbsp;sandy.payne@prairierealtyadvisors.com
                  </a>
                </div>
                <span className="team-position">Vice President</span>
                <h4 className="team-name">Sandy Payne</h4>
              </div>
            </div>
            {/* Team member*/}
            <div className="col-lg-3 col-sm-6">
              <div className="team-card-style-1 mx-auto">
                <div className="team-card-inner">
                  <div className="team-thumb">
                    <img src="/assets/albypic.jpeg" alt="Team Member Picture" />
                  </div>

                  <a className="team-contact-link" href="tel:+13907765843">
                    <i className="fe-icon-phone" />&nbsp;(312) 220-0054 / (312)
                    282-4565 (cellular)
                  </a>
                  <a
                    className="team-contact-link"
                    href="mailto:info@example.com"
                  >
                    <i className="fe-icon-mail" />&nbsp;alby@prairierealtyadvisors.com
                  </a>
                </div>
                <span className="team-position">Managing Director</span>
                <h4 className="team-name">Albert E. Van Alyea</h4>
              </div>
            </div>
            {/* Team member*/}
            <div className="col-lg-3 col-sm-6">
              <div className="team-card-style-1 mx-auto">
                <div className="team-card-inner">
                  <div className="team-thumb">
                    <img src="/assets/rosepic.jpg" alt="Team Member Picture" />
                  </div>
                  {/* <div className="team-social-bar text-center">
                    <a className="social-btn sb-style-4 sb-facebook" href="#">
                      <i className="socicon-facebook" />
                    </a>
                    <a className="social-btn sb-style-4 sb-twitter" href="#">
                      <i className="socicon-twitter" />
                    </a>
                    <a className="social-btn sb-style-4 sb-skype" href="#">
                      <i className="socicon-skype" />
                    </a>
                    <a className="social-btn sb-style-4 sb-linkedin" href="#">
                      <i className="socicon-linkedin" />
                    </a>
                  </div> */}
                  <a className="team-contact-link" href="tel:+72056557984">
                    <i className="fe-icon-phone" />&nbsp;(312) 220-0667
                  </a>
                  <a
                    className="team-contact-link"
                    href="mailto:info@example.com"
                  >
                    <i className="fe-icon-mail" />&nbsp;rosemarie.kern@prairierealtyadvisors.com
                  </a>
                </div>
                <span className="team-position">
                  Loan Servicing / Comptroller
                </span>
                <h4 className="team-name">Rosemarie D. Kern</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Personnel
