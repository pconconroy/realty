import React, {Component, Suspense, lazy} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import {Link} from 'react-router-dom'
import LenderCarousel from './lendercarousel'
import {Helmet} from 'react-helmet'

class saraAbout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Page Title*/}
        <div
          className="page-title d-flex"
          aria-label="Page title"
          style={{backgroundImage: 'url(assets/lincoln-park-edited.jpg)'}}
        >
          <div className="container text-left align-self-center">
            <nav aria-label="breadcrumb"></nav>
            <h1 className="page-title-heading" style={{color: 'white'}}>
              SARA Capital Markets
            </h1>
          </div>
        </div>

        <div className="container pb-5 mb-3">
          <h1>S A Realty Advisors</h1>

          <h3>
            S. A. Realty Advisors (“SARA”) is a boutique commercial brokerage
            founded by John Siff and James Armour to expand the real estate
            financing offerings of PRA. SARA is skilled in the acquisition and
            disposition of all types of institutional income producing
            properties. The founders have a combined fifty years of experience
            in commercial real estate. John’s experience in real estate is
            multi-faceted where John is a principal in a commercial mortgage
            bank, a property developer, a property management company and is the
            founding Managing Member of a real estate Investment Fund.
            Additionally, he is a Founding Director of an Illinois community
            bank and a Director of a multi-state mutual property and casualty
            insurance company. He has developed or invested in over $300,000,000
            and sold over $200,000,000 worth of real estate.
            <br />
            <br />
            James began his career working for a boutique real estate investment
            fund, that rehabbed and developed apartment buildings throughout the
            northside of Chicago. After his time there, he worked on behalf of
            United States bankruptcy trustee, facilitating the sale of a failed
            bank’s real estate assets including a $25 million portfolio.  In
            addition to being a partner at SARA, James is a member of Prairie
            Realty Advisors, focusing on mortgage loan origination. SARA is
            unlike other brokerages because its principles do not just focus on
            brokerage alone. They are well versed in all aspects of commercial
            real estate providing counsel from a multi-disciplinary perspective.
            This allows the firm to provide exceptional service to its clients.
            <br />
            <br />
            Currently, SARA has three Illinois licensed brokers.
          </h3>
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

export default saraAbout
