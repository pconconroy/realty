import React, {Component} from 'react'

class LenderCarousel extends Component {
  render() {
    return (
      <div>
        <section className="container pb-5 my-sm-2">
          {/* <h2 className="h3 block-title text-center mt-sm-3 mb-5">
              Institutional Correspondent Lenders
            </h2> */}
          <div className="text-center pt-5 pb-4 mt-3">
            <h3 className="h4 mb-1">Institutional Correspondent Lenders</h3>
            <p className="text-muted">
              Performance based on long term mutual respect.
            </p>
          </div>
          <div className="row">
            <div
              className="owl-carousel"
              id="carousel"
              data-owl-carousel='{ "nav": true, "dots": true, "loop": true, "margin": 30, "autoplay": true, "autoplayTimeout": 4000, "responsive": {"0":{"items":1},"630":{"items":2},"991":{"items":3},"1200":{"items":4}} }'
            >
              <img
                src="/assets/kansaslife.jpg"
                id="centered-caro"
                alt="Carousel Image"
              />
              <img
                src="/assets/royal-neighbors.png"
                id="centered-caro"
                alt="Carousel Image"
              />
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
                src="/assets/unitedfarmfamily.png"
                alt="Carousel Image"
                id="centered-caro"
              />
              <img
                src="/assets/walker.png"
                alt="Carousel Image"
                id="centered-caro"
              />
              <img
                src="/assets/westernandsouthern.png"
                alt="Carousel Image"
                id="centered-caro"
              />
            </div>

            {/* <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/01.png" width={165} alt="Partner" /></a></div>
      <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/02.png" width={165} alt="Partner" /></a></div>
      <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/03.png" width={165} alt="Partner" /></a></div>
      <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/04.png" width={165} alt="Partner" /></a></div>
      <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/07.png" width={165} alt="Partner" /></a></div>
      <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/05.png" width={165} alt="Partner" /></a></div>
      <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/08.png" width={165} alt="Partner" /></a></div>
      <div className="col-6 col-md-3"><a className="d-block py-2 mb-30 gray-to-color" href="#"><img className="d-block mx-auto opacity-75" src="img/partners/09.png" width={165} alt="Partner" /></a></div> */}
          </div>
        </section>
      </div>
    )
  }
}

export default LenderCarousel
