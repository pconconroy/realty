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
                  John founded of PRA in 1993 and is now President and Chairman.
                  With 40 years of direct real estate finance experience, he
                  oversees production, servicing, investor relations and works
                  to promote PRA as a fiducial intermediary of institutional
                  quality real estate. He is a graduate of Hobart College,
                  35-year member of the MBA, former director of Chicago
                  Landmarks Preservation Council, an independent director of
                  Northside Community Bank and Wolverine Mutual Insurance
                  Company and Manager of the Prairie Fund, Criterion 3 LLC and
                  Criterion 3 Lifestyle LLC. He is married with two grown
                  children, together the family actively supports Chicago based
                  organizations including Shirley Ryan AbilityLab, Daniel Murphy
                  Foundation, The Lakeview Pantry and Lincoln Park Zoo. John is
                  an avid skier, golfer and outdoorsman. He is a lifelong
                  Blackhawks fan.
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
                  <img src="assets/albypic2.jpg" alt="Team Member Picture" />
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
                  Alby has over 23 years’ experience in the commercial real
                  estate mortgage banking industry. He is a skilled veteran at
                  handling the origination, underwriting and closing of complex
                  financing transactions for a wide range of income producing
                  property and deal types. Alby has a BA and MS from the
                  University of Wisconsin Madison and is a licensed real estate
                  broker in Wisconsin and Illinois. He is married with two
                  children. He is actively involved with a variety of charitable
                  organizations including St Chrysostom’s Church and Day School,
                  F.A.S.T, and Society of Colonial Wars. He is an avid skier and
                  squash and tennis player.
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
                  <img src="assets/sabitt.jpg" alt="Team Member Picture" />
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
                  Jon joined PRA in 2017. An accountant and former CPA, Jon
                  oversees day to day company activities involving operations
                  and servicing. Jon is the father of three sons. Jon attended U
                  of I and is an avid Cubs fan and a fitness and cycling
                  enthusiast.
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
                  Steve is our General Counsel. He has general oversight of all
                  activities and provides guidance and strategy to all phases of
                  the business. Steve is a graduate of U of I and Cornell
                  University Law School. He is married and the father of two
                  grown kids. Outside of work, Steve is a lifelong Cubs fan as
                  well as a former employee. Steve is an active cyclist as well
                  as a music aficionado, where he travels worldwide following
                  his music passion.
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
