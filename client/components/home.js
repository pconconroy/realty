import React, {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <div className="center-home">
        <section className="bg-parallax" id="slim-down">
          <div
            className="bg-parallax-img"
            data-parallax="{&quot;y&quot; : 100}"
          >
            <img src="img/pages/service-hero-bg.png" alt="Service" />
          </div>
          <div className="container bg-parallax-content pt-5 pb-5">
            <h1 className="h2 block-title text-center">Home</h1>
            <div className="row justify-content-center pt-2">
              <div className="col-xl-8 col-lg-9 col-md-10">
                <p className="opacity-80 text-center" />
                <p className="opacity-80 text-center">
                  Prairie Realty Advisors, Inc., is a commercial mortgage
                  banking company based in Chicago, IL. We offer a broad array
                  of commercial loan programs through our active lender
                  relationships. With these programs we are able to access
                  appropriate capital for most property transactions.
                </p>
                <p className="opacity-80 text-center">
                  Our company consists of three main areas - Loan Production,
                  Construction Lending and Loan Servicing. The Production and
                  Construction areas facilitate commercial loans from our
                  lenders to our clients for the purpose of acquiring,
                  refinancing, or constructing commercial property. Our
                  servicing division works closely with our clients and Lenders
                  to maintain and service the loan once closed.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*START theFinancials.com Content*/}
        {/*copyright theFinancials.com - All Rights Reserved*/}
        {/*Get Help by Calling 1.843.886.3635*/}
        <iframe
          className="chart-right"
          style={{width: '100vw', height: 500}}
          src="https://www.thefinancials.com/syndicated/Free/EXc_Interest_MajorUS.html"
          marginHeight={0}
          marginWidth={0}
          hspace={0}
          vspace={0}
          frameBorder="no"
          title="Major US Interest Rates"
        />
        {/*END theFinancials.com Content*/}

        <section className="container py-5 my-2">
          <h2 className="h3 block-title text-center mt-3 mb-5">
            Our Partners<small>
              Well respected people and companies from around the world
            </small>
          </h2>
          <div className="row">
            <div className="col-6 col-md-3">
              <a className="d-block box-shadow py-5 mb-30" href="#">
                <img
                  className="d-block mx-auto"
                  src="/assets/aegon.png"
                  width={165}
                  alt="Partner"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a className="d-block box-shadow py-5 mb-30" href="#">
                <img
                  className="d-block mx-auto"
                  src="/assets/bankbnorth.jpg"
                  width={165}
                  alt="Partner"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a className="d-block box-shadow py-5 mb-30" href="#">
                <img
                  className="d-block mx-auto"
                  src="/assets/coram.png"
                  width={165}
                  alt="Partner"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a className="d-block box-shadow py-5 mb-30" href="#">
                <img
                  className="d-block mx-auto"
                  src="/assets/credits.png"
                  width={165}
                  alt="Partner"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a className="d-block box-shadow py-5 mb-30" href="#">
                <img
                  className="d-block mx-auto"
                  src="/assets/dunlop.png"
                  width={165}
                  alt="Partner"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a className="d-block box-shadow py-5 mb-30" href="#">
                <img
                  className="d-block mx-auto"
                  src="/assets/fargo.png"
                  width={165}
                  alt="Partner"
                />
              </a>
            </div>
            <div className="col-6 col-md-3">
              <a className="d-block box-shadow py-5 mb-30" href="#">
                <img
                  className="d-block mx-auto"
                  src="/assets/pnc.jpg"
                  width={165}
                  alt="Partner"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
