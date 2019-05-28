import React, {Component} from 'react'
import MobileMenu from './mobile-menu'
import Navbar from './navbar'
import Footer from './footer'

class Personnel extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Page Title*/}
        <div
          className="page-title d-flex"
          aria-label="Page title"
          style={{backgroundImage: 'url(assets/tetons5.jpg)'}}
        >
          <div className="container text-left align-self-center">
            <nav aria-label="breadcrumb">
              {/* <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item"><a href="#">Pages</a>
          </li>
        </ol> */}
            </nav>
            <h1 className="page-title-heading" style={{color: 'white'}}>
              Personnel
            </h1>
          </div>
        </div>
        {/* Page Content*/}
        <div className="container pb-5 mb-3">
          {/* Buy Online*/}

          {/* Outlet Stores*/}

          {/* Team*/}
          <div className="text-center pt-5 pb-4 mt-3">
            <h3 className="h4 mb-1">Our Team</h3>
            <p className="text-muted">The people making it happen.</p>
          </div>
          <div className="row">
            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/siffphoto.jpeg" alt="Team Member Picture" />
                </div>
                <span className="team-position">President</span>
                <h4 className="team-name">John F. Siff</h4>
                <a className="team-contact-link" href="tel:+19871625346">
                  <i className="fe-icon-phone" />&nbsp;(312) 220-0051/ (312)
                  543-0134 (cellular)
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:john.siff@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />&nbsp;john.siff@prairierealtyadvisors.com
                </a>
                <br />
                <p>
                  Mr. Siff is the founding principal of PRA and is the company’s
                  President and CEO. Mr. Siff has arranged, serviced, sold or
                  purchased over $3 billion of real estate debt and equity
                  during the last 35 years.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-github" href="#"><i className="socicon-github" /></a><a className="social-btn sb-style-1 sb-stackoverflow" href="#"><i className="socicon-stackoverflow" /></a><a className="social-btn sb-style-1 sb-skype" href="#"><i className="socicon-skype" /></a></div>
          </div> */}
              </div>
            </div>
            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/albypic.jpeg" alt="Team Member Picture" />
                </div>
                <span className="team-position">Managing Director </span>
                <h4 className="team-name">Albert E. Van Alyea</h4>
                <a className="team-contact-link" href="tel:+57872336590">
                  <i className="fe-icon-phone" />&nbsp; (312) 220-0054 / (312)
                  282-4565 (cellular)
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:alby@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />&nbsp;alby@prairierealtyadvisors.com
                </a>
                <br />
                <p>
                  As Managing Director and with over 18 years experience in the
                  commercial mortgage banking industry, Alby Van Alyea's primary
                  responsibilities lie in the origination, qualifying and
                  underwriting of potential financings for Prairie's
                  Correspondent Lenders.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-facebook" href="#"><i className="socicon-facebook" /></a><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-google-plus" href="#"><i className="socicon-googleplus" /></a><a className="social-btn sb-style-1 sb-linkedin" href="#"><i className="socicon-linkedin" /></a></div>
          </div> */}
              </div>
            </div>
            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/sabbitt.jpg" alt="Team Member Picture" />
                </div>
                <span className="team-position">Controller</span>
                <h4 className="team-name">Jon Sabitt</h4>
                <a className="team-contact-link" href="tel:+13907765843">
                  <i className="fe-icon-phone" />&nbsp;(312) 220-0667
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:jon.sabitt@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />&nbsp;jon.sabitt@prairierealtyadvisors.com
                </a>
                <br />
                <p>
                  Mr. Sabitt joined PRA in 2017. His responsibilities include
                  oversight of day to day activities. Additionally, he oversees
                  all investor reports and audits.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-pinterest" href="#"><i className="socicon-pinterest" /></a><a className="social-btn sb-style-1 sb-behance" href="#"><i className="socicon-behance" /></a><a className="social-btn sb-style-1 sb-dribbble" href="#"><i className="socicon-dribbble" /></a></div>
          </div> */}
              </div>
            </div>
            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/isaac.jpg" alt="Team Member Picture" />
                </div>
                <span className="team-position">General Counsel</span>
                <h4 className="team-name">Steven Isaacson</h4>
                <a className="team-contact-link" href="tel:+72056557984">
                  <i className="fe-icon-phone" />&nbsp;(847) 971-6140
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:steve@sbi-law.com"
                >
                  <i className="fe-icon-mail" />&nbsp;steve@sbi-law.com
                </a>
                <br />
                <p>
                  Mr. Isaacson provides lefal counsel to PRA and PRASC and all
                  of the related companies. He joined PRA in 2013.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-facebook" href="#"><i className="socicon-facebook" /></a><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-skype" href="#"><i className="socicon-skype" /></a><a className="social-btn sb-style-1 sb-linkedin" href="#"><i className="socicon-linkedin" /></a></div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer*/}
        <Footer />
        {/* Back To Top Button*/}
        <a className="scroll-to-top-btn" href="#">
          <i className="fe-icon-chevron-up" />
        </a>
        {/* Backdrop*/}
        <div className="site-backdrop" />
        {/* JavaScript (jQuery) libraries, plugins and custom scripts*/}
      </div>
    )
  }
}

export default Personnel
