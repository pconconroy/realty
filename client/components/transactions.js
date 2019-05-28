import React, {Component} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import TransCard from './trans-card'
import GridView from './gridview'

class Transactions extends Component {
  constructor() {
    super()
    this.state = {
      showGrid: false
    }
  }

  toggleGrid = () => {
    if (!this.state.showGrid) {
      this.setState({showGrid: true})
    } else {
      this.setState({showGrid: false})
      window.location.reload()
    }
  }
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
              Transactions
            </h1>
          </div>
        </div>
        {/* Page Content*/}
        <div className="pl-xl-5" id="more-padding">
          <div className="d-sm-flex justify-content-between text-center text-sm-left">
            <h2 className="h4">Representative Transactions</h2>
            <a
              className="btn btn-style-4 btn-primary btn-sm"
              href="#"
              id="new-button"
              onClick={this.toggleGrid}
            >
              Grid View
            </a>
          </div>
          {!this.state.showGrid ? (
            <div className="row pt-4">
              <div
                className="owl-carousel"
                data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;autoplay&quot;: false, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;630&quot;:{&quot;items&quot;:2},&quot;991&quot;:{&quot;items&quot;:3},&quot;1200&quot;:{&quot;items&quot;:5}} }"
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

                {/* <img src="/assets/Walgreens.jpg" alt="Carousel Image" />
  <img src="/assets/UofIPhotov2.jpg" alt="Carousel Image" />
  <img src="/assets/waukphoto.jpg" alt="Carousel Image" />
  <img src="/assets/tetons4.jpeg" alt="Carousel Image" />
  <img src="/assets/OrlandPhoto.jpg" alt="Carousel Image" />
  <img src="/assets/Oneidaphoto.jpg" alt="Carousel Image" /> */}
              </div>

              {/* <div className="col-sm-6 mb-4">
    <div className="blog-card border"><a className="post-thumb" href="#"><img src="img/homepages/corporate-website/news01.jpg" alt="Post Thumbnail" /></a>
      <div className="card-body">
        <h5 className="post-title"><a href="#">Ensure safety in a high-risk environment</a></h5><a className="tag-link" href="#">Risk management</a>
      </div>
      <div className="card-footer"><a className="post-author" href="#">
          <div className="post-author-avatar"><img src="img/blog/authors/th01.jpg" alt="Post Author" />
          </div>
          <div className="post-author-name">Sara Palson</div></a>
        <div className="post-meta"><a href="#"><i className="fe-icon-message-square" />21</a><span><i className="fe-icon-clock" />Sep 03, 2018</span></div>
      </div>
    </div>
  </div> */}
              {/* <div className="col-sm-6 mb-4">
    <div className="blog-card border"><a className="post-thumb" href="#"><img src="img/homepages/corporate-website/news02.jpg" alt="Post Thumbnail" /></a>
      <div className="card-body">
        <h5 className="post-title"><a href="#">Adapt to a changing business environment</a></h5><a className="tag-link" href="#">Business</a>
      </div>
      <div className="card-footer"><a className="post-author" href="#">
          <div className="post-author-avatar"><img src="img/blog/authors/th02.jpg" alt="Post Author" />
          </div>
          <div className="post-author-name">Mark Peterson</div></a>
        <div className="post-meta"><a href="#"><i className="fe-icon-message-square" />19</a><span><i className="fe-icon-clock" />Aug 26, 2018</span></div>
      </div>
    </div>
  </div> */}
            </div>
          ) : (
            <GridView />
          )}
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

export default Transactions
