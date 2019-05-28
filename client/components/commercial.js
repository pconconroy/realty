import React, {Component} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Link} from 'react-router-dom'

class Commercial extends Component {
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
              Commercial
            </h1>
          </div>
        </div>
        {/* Page Content*/}
        <div className="container pb-5 mb-3">
          {/* Buy Online*/}
          <section className="container my-5">
            <div className="bg-secondary px-3 py-5">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 pt-3 text-center">
                  <span className="d-block text-lg mb-2">What We Do</span>
                  <h3 className="h4 block-title mb-3">
                    Loan Production{' '}
                    <span className="font-weight-light text-muted">/</span>{' '}
                    Construction Lending{' '}
                    <span className="font-weight-light text-muted">/</span> Loan
                    Servicing
                  </h3>
                  <p className="text-muted">
                    Through our correspondent and other lending relationships,
                    Prairie Realty Advisors, Inc. can provide acquisition,
                    construction, permanent, and bridge financing on a wide
                    range of loans and services on most types of income
                    producing properties such as: Office Buildings, Shopping
                    Centers and Retail Properties, Industrial Buildings,
                    Multi-Family Properties,Single Tenant Properties, Medical
                    Office Buildings, Credit Leased Facilities, Health Care
                    Facilities, Business Parks, Mobile Home Parks, Land Sale
                    Leasebacks, Institutional Sales, IRB and Tax Exempt
                    Financing, Mezzanine/Bridge Loans, Specialty Properties ,
                    Third-Party and Institutional Equity,Seed & Venture RE CapX,
                    Senior Living (Independent and Assisted), Historic Tax
                    Credit Financing, Student Housing, Discounted Note Funding,
                    Development Advisory
                  </p>

                  {/* <a className="video-player-button my-3 mr-3" href="https://player.vimeo.com/video/56362909?color=ac32e4&title=0&byline=0&portrait=0" data-fancybox data-width={1000} data-height={563}><i className="fe-icon-play" /></a><span className="video-player-label text-muted">Corporate video</span> */}
                </div>
              </div>
            </div>
          </section>
          <div className="comparison-table">
            <h1>Loan Terms We Excel At</h1>
            <table className="table table-bordered">
              <thead style={{textAlign: 'center', alignContent: 'center'}} />
              <tbody>
                <tr>
                  <th>Loan Amount</th>
                  <td>$2,000,000+</td>
                </tr>
                <tr>
                  <th>Loan Fees</th>
                  <td>1% of Loan Amount</td>
                </tr>
                <tr>
                  <th>Interest Rates</th>
                  <td>
                    Typically fixed at 60-350 basis points over the
                    corresponding US Treasury Bond Rates or floating over Libor
                  </td>
                </tr>
                <tr>
                  <th>Term</th>
                  <td>3-25 years</td>
                </tr>
                <tr>
                  <th>Amortization</th>
                  <td>10 – 30 years</td>
                </tr>
                <tr>
                  <th>Debt Coverage</th>
                  <td>1.10 to 1.30</td>
                </tr>
                <tr>
                  <th>Max Loan-to-Value</th>
                  <td>
                    Apartments Up to 85% <br /> Office Up to 80% <br />{' '}
                    Industrial Up to 80% <br />
                    Retail Up to 80% <br />Credit Leases Up to 100%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1>What We Need From You</h1>
          <ul className="list-group">
            <li className="list-group-item">Current Rent Roll</li>
            <li className="list-group-item">Borrower Information</li>
            <li className="list-group-item">
              Brief Description of the Property
            </li>
            <li className="list-group-item">
              Operating History - last 3 years
            </li>
            <li className="list-group-item">Year-to-Date Income and Expense</li>
            <li className="list-group-item">Property Photos</li>
            <li className="list-group-item">Aerial (if available)</li>
            <li className="list-group-item">
              Any and all professional reports including Appraisal, Phase 1
              Environmental Assessment and Title Reports
            </li>
          </ul>
          <br />
          <br />
          <div id="center-com">
            <Link
              to="/inquiries"
              className="btn btn-style-4 btn-gradient mb-3"
              id="new-grad-blue"
            >
              Make an Inquiry
            </Link>
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

export default Commercial
