import React, {Component} from 'react'
import Navbar from './navbar'
import TransCard from './trans-card'
import {Helmet} from 'react-helmet'
import Footer from './footer'
import {Link} from 'react-router-dom'
import LenderCarousel from './lendercarousel'
class Home extends Component {
  // componentDidMount() {
  //   postscribe('#mydiv', '<script src="/CreateX/dist/js/theme.min.js"></script>')
  //   postscribe('#mydiv', '<script src="/CreateX/dist/js/card.min.js"></script>')
  //   postscribe('#mydiv', '<script src="/CreateX/dist/js/modernizr.min.js"></script>')
  //   postscribe('#mydiv', '<script src="/CreateX/dist/js/vendor.min.js"></script>')
  // }
  render() {
    return (
      <div>
        <Helmet>
          <script src="/CreateX/dist/js/theme.min.js" />
          <script src="/CreateX/dist/js/card.min.js" />
          <script src="/CreateX/dist/js/modernizr.min.js" />
          <script src="/CreateX/dist/js/vendor.min.js" />
        </Helmet>
        <Navbar />
        {/* Page Content*/}
        {/* Hero Slider*/}
        <section
          className="owl-carousel dots-inside controls-hidden-mobile"
          data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000 }"
        >
          <div
            className="bg-cover bg-center bg-no-repeat py-5"
            style={{backgroundImage: 'url(assets/chicagoskynight.jpg)'}}
          >
            <span className="bg-overlay" />
            <div className="container bg-content py-md-5">
              <div className="row justify-content-center py-md-5">
                <div className="col-12 text-center py-md-5">
                  <div
                    className="d-table w-100 bg-no-repeat bg-center"
                    style={{
                      minHeight: 448,
                      backgroundSize: '452px 448px'
                    }}
                  >
                    <div className="d-table-cell align-middle">
                      <h2 className="display-4 text-white">
                        <em className="font-weight-light">
                          Prairie Realty Advisors
                        </em>
                      </h2>
                      <p className="text-xl text-white opacity-75 pb-4">
                        Over $3.0 billion in commercial financing since
                        September 1992.
                      </p>
                      <Link
                        className="btn btn-style-4 btn-light"
                        to="/about"
                        onClick={() => {
                          this.setTimeout(50, window.location.reload())
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat py-5"
            style={{backgroundImage: 'url(assets/tetons4.jpeg)'}}
          >
            <span className="bg-overlay" style={{opacity: '.55'}} />
            <div className="container bg-content py-md-5">
              <div className="row justify-content-center py-md-5">
                <div className="col-12 text-center py-md-5">
                  <div
                    className="d-table w-100 bg-no-repeat bg-center"
                    style={{
                      minHeight: 448,
                      backgroundSize: '452px 448px'
                    }}
                  >
                    <div className="d-table-cell align-middle">
                      <h2 className="display-4 text-white">
                        <em className="font-weight-light">
                          Prairie Realty Advisors
                        </em>
                      </h2>
                      <p className="text-xl text-white opacity-75 pb-4">
                        Servicing Portfolio of over $300 million.
                      </p>
                      <Link
                        className="btn btn-style-4 btn-light"
                        to="/about"
                        onClick={() => {
                          this.setTimeout(50, window.location.reload())
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About*/}
        {/* <section className="container my-5">
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
                  Prairie Realty Advisors, Inc., is a commercial mortgage
                  banking company based in Chicago, IL. We offer a broad array
                  of commercial loan programs through our active lender
                  relationships. With these programs we are able to access
                  appropriate capital for most property transactions.
                  <br />
                  <br />
                  Our company consists of three main areas - Loan Production,
                  Construction Lending and Loan Servicing. The Production and
                  Construction areas facilitate commercial loans from our
                  lenders to our clients for the purpose of acquiring,
                  refinancing, or constructing commercial property. Our
                  servicing division works closely with our clients and Lenders
                  to maintain and service the loan once closed.
                </p>
                <Link
                  className="btn btn-style-4 btn-primary btn-sm"
                  id="new-button"
                  to="/commercial"
                >
                  Learn More
                </Link>

              </div>
            </div>
          </div>
        </section> */}
        {/* Services*/}
        {/* <section className="container pt-3">
    <h2 className="h3 block-title text-center">What we do<small>Whatever we do, we do with you in mind </small></h2>
    <div className="row pt-5 mt-30">
      <div className="col-lg-4 col-sm-6 mb-30 pb-5"><a className="card" href="#">
          <div className="box-shadow bg-white rounded-circle mx-auto" style={{width: 90, height: 90, marginTop: '-45px'}}><img className="d-block mx-auto" src="img/homepages/corporate-website/service-icon01.png" alt="Certification" /></div>
          <div className="card-body text-center">
            <h3 className="card-title pt-1">Certification</h3>
            <p className="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
          </div></a></div>
      <div className="col-lg-4 col-sm-6 mb-30 pb-5"><a className="card" href="#">
          <div className="box-shadow bg-white rounded-circle mx-auto" style={{width: 90, height: 90, marginTop: '-45px'}}><img className="d-block mx-auto" src="img/homepages/corporate-website/service-icon02.png" alt="Training" /></div>
          <div className="card-body text-center">
            <h3 className="card-title pt-1">Training</h3>
            <p className="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
          </div></a></div>
      <div className="col-lg-4 col-sm-6 mb-30 pb-5"><a className="card" href="#">
          <div className="box-shadow bg-white rounded-circle mx-auto" style={{width: 90, height: 90, marginTop: '-45px'}}><img className="d-block mx-auto" src="img/homepages/corporate-website/service-icon03.png" alt="Consulting" /></div>
          <div className="card-body text-center">
            <h3 className="card-title pt-1">Consulting</h3>
            <p className="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
          </div></a></div>
    </div>
  </section> */}
        {/* News ans Events*/}
        {/* <section className="container-fluid pt-sm-4 pb-5">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 mb-5 mb-lg-0" id="center-picture">
              <div
                className="position-relative bg-cover bg-center bg-no-repeat px-4 py-5"
                id="center-image"
                style={{backgroundImage: 'url(assets/constintern.jpg)'}}
              >
                <span className="bg-overlay" style={{opacity: '.1'}} />
                <div className="bg-content pt-4 text-center">
                  <h3 className="font-family-body font-weight-light text-white mb-2">
                    Want More Experience?
                  </h3>
                  <h2 className="text-white mb-2 pb-1">Internship</h2>
                  <h5 className="font-family-body font-weight-light text-white mb-5">
                    Apply for an internship today!
                  </h5>

                  <br />
                  <Link
                    className="btn btn-style-4 btn-gradient mb-3"
                    id="new-grad-blue"
                    to="/internship"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="pl-xl-5">
                <div className="d-sm-flex justify-content-between text-center text-sm-left">
                  <h2 className="h4">Representative Transactions</h2>
                  <Link
                    className="btn btn-style-4 btn-primary btn-sm"
                    id="new-button"
                    to="/transactions"
                    onClick={() => {
                      this.setTimeout(500, window.location.reload())
                    }}
                  >
                    SEE ALL
                  </Link>
                </div>
                <div className="row pt-4">
                  <div
                    className="owl-carousel"
                    data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;630&quot;:{&quot;items&quot;:2},&quot;991&quot;:{&quot;items&quot;:3},&quot;1200&quot;:{&quot;items&quot;:2}} }"
                  >
                    <TransCard
                      image="DenverPhoto.jpg"
                      location="Denver, CO"
                      company="Life Company"
                      price="$2,000,000+"
                    />
                    <TransCard
                      image="ElginPhoto.png"
                      location="Elgin, IL"
                      company="Bank"
                      price="$1,600,000"
                    />
                    <TransCard
                      image="Walgreens.jpg"
                      location="Oswego, IL"
                      company="Life Company"
                      price="$3,800,000"
                    />
                    <TransCard
                      image="OrlandPhoto.jpg"
                      location="Orland Park, IL"
                      company="Life Company"
                      price="$2,200,000"
                    />
                    <TransCard
                      image="Oneidaphoto.jpg"
                      location="Denver, CO"
                      company="Life Company"
                      price="$19,500,000"
                    />
                    <TransCard
                      image="MSUPhoto2014v2.jpg"
                      location="Starkville, MS"
                      company="Agency Lender"
                      price="$19,000,000"
                    />
                    <TransCard
                      image="kindercare.jpg"
                      location="Oswego, IL"
                      company="Life Company"
                      price="$3,800,000"
                    />
                    <TransCard
                      image="marketsquarephoto.jpg"
                      location="Lake Forest, IL"
                      company="CMBS"
                      price="$29,000,000"
                    />
                    <TransCard
                      image="waukphoto.jpg"
                      location="Suburban Chicago, IL"
                      company="CMBS"
                      price="$20,000,000+"
                    />
                    <TransCard
                      image="corporate-headquarters.jpg"
                      location="Elmhurst, IL"
                      company="Life Company"
                      price="$20,000,000+"
                    />
                    <TransCard
                      image="LUMCParkRidge.jpg"
                      location="Park Ridge, IL"
                      company="Life Company"
                      price="$1,300,000"
                    />
                    <TransCard
                      image="StaybridgeGlenviewPhoto.jpg"
                      location="Glenview, IL"
                      company="CMBS"
                      price="$10,000,000+"
                    />
                    <TransCard
                      image="Oneidaphoto.jpg"
                      location="Urbana, IL"
                      company="Bank"
                      price="$5,500,000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Clients*/}
        {/* <section className="container pb-5 my-sm-2">
          <h2 className="h3 block-title text-center mt-sm-3 mb-5">
            Institutional Correspondent Lenders
          </h2>
          <div className="row">
            <div
              className="owl-carousel"
              data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;630&quot;:{&quot;items&quot;:2},&quot;991&quot;:{&quot;items&quot;:3},&quot;1200&quot;:{&quot;items&quot;:4}} }"
            >
              <img src="/assets/coram.png" alt="Carousel Image" />
              <img
                src="/assets/aegon.png"
                id="centered-caro"
                alt="Carousel Image"
              />
              <img
                src="/assets/credits.png"
                id="centered-caro"
                alt="Carousel Image"
              />
              <img src="/assets/fargo.png" alt="Carousel Image" />
              <img src="/assets/pnc.jpg" alt="Carousel Image" />
              <img
                src="/assets/bankbnorth.jpg"
                alt="Carousel Image"
                id="centered-caro"
              />
              <img
                src="/assets/colum.png"
                alt="Carousel Image"
                id="centered-caro"
              />
              <img
                src="/assets/farmfamily.jpg"
                alt="Carousel Image"
                id="centered-caro"
              />
              <img
                src="/assets/walker.png"
                alt="Carousel Image"
                id="centered-caro"
              />
            </div>


          </div>
        </section> */}
        {/* Contact Us CTA*/}
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

export default Home
