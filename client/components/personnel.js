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
              Team
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
          <div className="row" id="center-team">
            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30" id="make-wider">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/siffphoto.jpeg" alt="Team Member Picture" />
                </div>
                <span className="team-position">President</span>
                <h4 className="team-name">John F. Siff</h4>
                <a className="team-contact-link" href="tel:+19871625346">
                  <i className="fe-icon-phone" />
                  &nbsp;(312) 220-0051/ (312) 543-0134 (cellular)
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:john.siff@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />
                  &nbsp;john.siff@prairierealtyadvisors.com
                </a>
                <br />
                <p>
                  John founded of PRA in 1993 and is President and Chairman.
                  With over 40 years of direct real estate finance experience,
                  he oversees production, servicing, investor relations and
                  works to promote PRA as a fiducial intermediary of
                  institutional quality real estate. He is a graduate of Hobart
                  College, 35-year member of the MBA, former director of Chicago
                  Landmarks Preservation Council, and a long supporter of the
                  ULI. He is married with two grown children. Together the
                  family actively supports many Chicago based organizations
                  which provides special community services for all Chicagoans.
                  John is an avid skier, golfer and outdoorsman. He is a
                  lifelong Blackhawks fan.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-github" href="#"><i className="socicon-github" /></a><a className="social-btn sb-style-1 sb-stackoverflow" href="#"><i className="socicon-stackoverflow" /></a><a className="social-btn sb-style-1 sb-skype" href="#"><i className="socicon-skype" /></a></div>
          </div> */}
              </div>
            </div>
            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30" id="make-wider">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/albypic2.jpg" alt="Team Member Picture" />
                </div>
                <span className="team-position">Managing Director </span>
                <h4 className="team-name">Albert E. Van Alyea</h4>
                <a className="team-contact-link" href="tel:+57872336590">
                  <i className="fe-icon-phone" />
                  &nbsp; (312) 220-0054 / (312) 282-4565 (cellular)
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:alby@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />
                  &nbsp;alby@prairierealtyadvisors.com
                </a>
                <br />
                <p>
                  Alby has over 25 years of experience in the commercial real
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
            <div className="col-xl-3 col-sm-6 mb-30" id="make-wider">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img
                    src="assets/jamie-blue-grad.jpg"
                    alt="Team Member Picture"
                  />
                </div>
                <span className="team-position">Production Officer</span>
                <h4 className="team-name">Vernon James Armour</h4>
                <a className="team-contact-link" href="tel:+19871625346">
                  <i className="fe-icon-phone" />
                  &nbsp;(312) 220-0053
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:john.siff@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />
                  &nbsp;james.armour@prairierealtyadvisors.com
                </a>
                <br />
                <p>
                  James joined PRA in 2020 as our newest member of the loan
                  production team. Additionally, his joining the company
                  coincides with the establishment of a capital markets
                  presence, known as S.A. Realty Advisors. James has 8 years of
                  multi-family experience having worked for a fund management
                  firm that developed, repositioned and disposed of Chicago area
                  properties. Additionally, he has a specialty practice
                  representing US bankruptcy Trustees in disposition of real
                  property. James graduated from Roanoke College in Virginia
                  with a degree in History. He is an avid golfer and
                  outdoorsman. In his free time, he volunteers for the Evans
                  Scholars Foundation.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-github" href="#"><i className="socicon-github" /></a><a className="social-btn sb-style-1 sb-stackoverflow" href="#"><i className="socicon-stackoverflow" /></a><a className="social-btn sb-style-1 sb-skype" href="#"><i className="socicon-skype" /></a></div>
          </div> */}
              </div>
            </div>
            {/* Team member*/}

            {/* Team member*/}

            {/* Team member*/}

            {/* Team member*/}
          </div>
          <div className="row" id="center-team">
            <div className="col-xl-3 col-sm-6 mb-30" id="make-wider">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img
                    src="assets/angie-grad-blue.jpg"
                    alt="Team Member Picture"
                  />
                </div>
                <span className="team-position">Controller</span>
                <h4 className="team-name">Angie Jackson</h4>
                <a className="team-contact-link" href="tel:+19871625346">
                  <i className="fe-icon-phone" />
                  &nbsp;(662) 418-4994
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:john.siff@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />
                  &nbsp;angie@criterion3.com
                </a>
                <br />
                <p>
                  Angie Joined PRA in 2019. Angie brings over 25 years of real
                  estate property management and project development experience
                  in rolls that range from property management, portfolio
                  management, new site development to COO of a related
                  multi-state vertical real estate enterprise. She oversees day
                  to day financial activities including A/R and A/P, primary
                  banking relationship management and reporting functions all of
                  PRA, SARA and PRAH. Angie is mother to two teen daughters. She
                  graduated from SUI and is an avid skier, boater and outdoors
                  person.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-github" href="#"><i className="socicon-github" /></a><a className="social-btn sb-style-1 sb-stackoverflow" href="#"><i className="socicon-stackoverflow" /></a><a className="social-btn sb-style-1 sb-skype" href="#"><i className="socicon-skype" /></a></div>
          </div> */}
              </div>
            </div>
            {/* Team member*/}

            {/* Team member*/}

            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30" id="make-wider">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/sabitt.jpg" alt="Team Member Picture" />
                </div>
                <span className="team-position">Head of Servicing</span>
                <h4 className="team-name">Jon Sabitt</h4>
                <a className="team-contact-link" href="tel:+13907765843">
                  <i className="fe-icon-phone" />
                  &nbsp;(312) 220-0667
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:jon.sabitt@prairierealtyadvisors.com"
                >
                  <i className="fe-icon-mail" />
                  &nbsp;jon.sabitt@prairierealtyadvisors.com
                </a>
                <br />
                <p>
                  Jon joined PRA in 2017. An accountant and CPA, Jon has over 30
                  years of experience in the real estate industry. He oversees
                  day to day activities of the servicing portfolio. Jon is the
                  father of three sons. Jon attended U of I and is an avid Cubs
                  fan and a fitness and cycling enthusiast.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-pinterest" href="#"><i className="socicon-pinterest" /></a><a className="social-btn sb-style-1 sb-behance" href="#"><i className="socicon-behance" /></a><a className="social-btn sb-style-1 sb-dribbble" href="#"><i className="socicon-dribbble" /></a></div>
          </div> */}
              </div>
            </div>

            {/* Team member*/}
            <div className="col-xl-3 col-sm-6 mb-30" id="make-wider">
              <div className="team-card-style-3 mx-auto">
                <div className="team-thumb">
                  <img src="assets/isaac.jpg" alt="Team Member Picture" />
                </div>
                <span className="team-position">General Counsel</span>
                <h4 className="team-name">Steven Isaacson</h4>
                <a className="team-contact-link" href="tel:+72056557984">
                  <i className="fe-icon-phone" />
                  &nbsp;(847) 971-6140
                </a>
                <a
                  className="team-contact-link"
                  href="mailto:steve@sbi-law.com"
                >
                  <i className="fe-icon-mail" />
                  &nbsp;steve@sbi-law.com
                </a>
                <br />
                <p>
                  Steve is our General Counsel and provided legal services to
                  the firm for over 9 years. His 40+ year legal career has been
                  focused on transactional investment grade real estate. He has
                  general oversight of all activities and provides guidance and
                  strategy to all phases of the business. Steve is a graduate of
                  U of I and Cornell University Law School. He is married and
                  the father of two grown kids. Outside of work, Steve is a
                  lifelong Cubs fan as well as a former employee. Steve is an
                  active cyclist as well as a music aficionado, where he travels
                  worldwide following his music passion.
                </p>
                {/* <div className="team-social-bar-wrap">
            <div className="team-social-bar"><a className="social-btn sb-style-1 sb-facebook" href="#"><i className="socicon-facebook" /></a><a className="social-btn sb-style-1 sb-twitter" href="#"><i className="socicon-twitter" /></a><a className="social-btn sb-style-1 sb-skype" href="#"><i className="socicon-skype" /></a><a className="social-btn sb-style-1 sb-linkedin" href="#"><i className="socicon-linkedin" /></a></div>
          </div> */}
              </div>
            </div>
            {/* Team member*/}

            {/* Team member*/}
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
