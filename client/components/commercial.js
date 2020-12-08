import React, {Component} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Link} from 'react-router-dom'
import Inquiries from './inquiries'

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
              Expertise and Inquiries
            </h1>
          </div>
        </div>
        {/* Page Content*/}
        <div className="container pb-5 mb-3">
          {/* Buy Online*/}
          <section className="container my-5">
            <div className="bg-secondary px-3 py-5">
              <div className="row justify-content-center">
                <div
                  className="col-xl-8 col-lg-10 pt-3 text-center"
                  id="no-padd"
                >
                  <h2 id="font-boi">
                    Through our correspondent and other long-term lending
                    relationships, Prairie Realty Advisors, Inc. can provide
                    acquisition, construction, permanent, and bridge financing
                    on a wide range of loans and services on most types of
                    income producing properties including:
                  </h2>

                  {/* <a className="video-player-button my-3 mr-3" href="https://player.vimeo.com/video/56362909?color=ac32e4&title=0&byline=0&portrait=0" data-fancybox data-width={1000} data-height={563}><i className="fe-icon-play" /></a><span className="video-player-label text-muted">Corporate video</span> */}
                </div>
              </div>
            </div>
          </section>
          <div className="comparison-table" id="more-padding">
            <table className="table table-bordered">
              <thead style={{textAlign: 'center', alignContent: 'center'}} />

              <tbody>
                <tr>
                  <td>Office Buildings</td>
                  <td>Single Tenant Properties</td>
                  <td>Mobile Home Parks</td>
                </tr>
                <tr>
                  <td>Shopping Centers</td>
                  <td>Medical Office Buildings</td>
                  <td>Land Sale Leasebacks</td>
                </tr>
                <tr>
                  <td>Retail Properties</td>
                  <td>Credit Leased Facilities</td>
                  <td>Institutional Sales</td>
                </tr>
                <tr>
                  <td>Industrial Buildings</td>
                  <td>Health Care Facilities</td>
                  <td>IRB and Tax Exempt Financing</td>
                </tr>
                <tr>
                  <td>Multi-Family Properties</td>
                  <td>Business Parks</td>
                  <td>Third-Party and Institutional Equity</td>
                </tr>
                <tr>
                  <td>Mezzanine/Bridge Loans</td>
                  <td>Seed and Venture</td>
                  <td>Historic Tax Credit Financing</td>
                </tr>
                <tr>
                  <td>Institutional Sales</td>
                  <td>RE Cap X</td>
                  <td>Student Housing</td>
                </tr>
                <tr>
                  <td>Specialty Properties</td>
                  <td>Discounted Note Funding</td>
                  <td>Senior Living (Independent/Assisted)</td>
                </tr>
              </tbody>
            </table>
            <div id="center-com">
              <h2 id="font-boi">
                Capital Market execution services are provided by S.A. Realty
                Advisors and Development Advisory services are provided through
                a subsidiary company
              </h2>
            </div>
          </div>
          {/* <h1>What We Need From You</h1> */}
          {/* <ul className="list-group">
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
          </ul> */}
          <br />
          <br />
          {/* <div id="center-com">
            <Link
              to="/inquiries"
              className="btn btn-style-4 btn-gradient mb-3"
              id="new-grad-blue"
            >
              Make an Inquiry
            </Link>
          </div> */}
          <Inquiries />
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
