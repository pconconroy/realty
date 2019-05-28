import React, {Component} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Link} from 'react-router-dom'

class About extends Component {
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
              About Us
            </h1>
          </div>
        </div>
        {/* Page Content*/}
        <div className="container pb-5 mb-3">
          {/* Buy Online*/}
          <h1>The Facts</h1>
          <ul className="list-group">
            <li className="list-group-item">
              Over $3.0 billion in commercial financing since September 1992.
            </li>
            <li className="list-group-item">
              Coverage of the U. S. as well as Canada, Mexico and Europe in
              2003.
            </li>
            <li className="list-group-item">
              Four commercial real estate finance professionals.
            </li>
            <li className="list-group-item">
              Servicing Portfolio of over $300 million.
            </li>
            <li className="list-group-item">
              Ten(10) correspondent lender relationships.
            </li>
            <li className="list-group-item">Over 400 financings since 2000.</li>
          </ul>
          <br />
          <br />
          <div className="d-md-table w-100 p-4 p-lg-5 mb-30 box-shadow">
            <div
              className="d-md-table-cell align-middle mx-auto mb-4 mb-md-0"
              style={{width: 150}}
            >
              <img
                className="d-block w-100"
                src="assets/whatwedo.svg"
                alt="Delivery Worldwide"
              />
            </div>
            <div className="d-md-table-cell align-middle pl-md-4 pl-lg-5 text-center text-md-left">
              <h3 className="h4">What We Do</h3>
              <p className="text-muted">
                As a mortgage banker, PRA originates, sells and services
                commercial real estate loans. In return for providing these
                services, the Company receives remuneration in the form of fees
                from borrowers or clients for originating the transaction, and
                servicing override fees for "servicing" loans for a lender. PRA
                has relationships with many institutional lenders throughout the
                U.S. The firm is able to provide capital to borrowers for loans
                ranging from $2,000,000 and above.
              </p>
            </div>
          </div>

          <div className="d-md-table w-100 p-4 p-lg-5 mb-30 box-shadow">
            <div
              className="d-md-table-cell align-middle mx-auto mb-4 mb-md-0"
              style={{width: 150}}
            >
              <img
                className="d-block w-100"
                src="assets/earth.svg"
                alt="Mobile App"
              />
            </div>
            <div className="d-md-table-cell align-middle pl-md-4 pl-lg-5 text-center text-md-left">
              <h3 className="h4">Who We Serve</h3>
              <p className="text-muted">
                Headquartered in Chicago, the firm services a direct market of
                over 15 million people. PRA takes special pride in the fact that
                it is employed by its clients across geographic boundaries. It
                works hard to create a bond between lender and borrower in an
                attempt to realizing a higher percentage of repeat business.
              </p>
            </div>
          </div>
          {/* Outlet Stores*/}
          <div className="d-md-table w-100 p-4 p-lg-5 box-shadow">
            <div
              className="d-md-table-cell align-middle mx-auto mb-4 mb-md-0"
              style={{width: 150}}
            >
              <img
                className="d-block w-100"
                src="assets/whoweserve.svg"
                alt="Outlet Stores"
              />
            </div>
            <div className="d-md-table-cell align-middle pl-md-4 pl-lg-5 text-center text-md-left">
              <h3 className="h4">Who We Are</h3>
              <p className="text-muted">
                As of the second quarter of 2017, the firm has four employees.
                Loan production and firm administration are the responsibility
                of John F. Siff, President. Mr. Alby Van Alyea, Managing
                Director, is primarily responsible for origination of loan
                opportunities and production and reports to Mr. Siff. Loan
                underwriting, administration, closing and servicing are under
                the purview of Mr. Jon Sabitt.
                <br />
                <br />
                Mr. Jon Sabitt came on board in 1998 to oversee day to day
                operation of the servicing company. With over 20 years of
                accounting and servicing experience, Mr. Sabitt oversees all
                Investor reporting, the Annual Audit and year-end reporting
                functions as well.
                <br />
                <br />
                PRA has combined experience of over 100 years in the real estate
                profession. It is a member in good standing with the Mortgage
                Bankers of America, State of Illinois - Department of
                Professional Regulation, and the Urban Land Institute. Mr. Siff
                has arranged, serviced, sold or purchased over two billion
                dollars of real estate. He has been employed in the mortgage
                banking industry since 1979 and held a myriad of staff and line
                positions with several of the oldest and revered firms in
                Chicago. Albert Van Alyea, MD, has been in the real estate
                business since ----. He Joined PRA in 2014
              </p>
            </div>
          </div>
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
                <Link
                  className="btn btn-style-4 btn-primary btn-sm"
                  id="new-button"
                  to="/personnel"
                >
                  Learn More
                </Link>
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
                <Link
                  className="btn btn-style-4 btn-primary btn-sm"
                  id="new-button"
                  to="/personnel"
                >
                  Learn More
                </Link>
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
                <Link
                  className="btn btn-style-4 btn-primary btn-sm"
                  id="new-button"
                  to="/personnel"
                >
                  Learn More
                </Link>
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
                <Link
                  className="btn btn-style-4 btn-primary btn-sm"
                  id="new-button"
                  to="/personnel"
                >
                  Learn More
                </Link>
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

export default About
