import React, {Component} from 'react'
import TransCard from './trans-card'
import GridCard from './grid-card'

class GridView extends Component {
  render() {
    return (
      <div>
        {/* <div id="align-right">
          <a
            className="btn btn-style-4 btn-primary btn-sm"
            href="#"
            onClick={this.toggleGrid}
          >
            Carousel View
          </a>
        </div> */}
        <div className="commercial-row">
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="DenverPhoto.jpg"
              location="Denver, CO"
              company="Life Company"
              price="$2,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="ElginPhoto.png"
              location="Elgin, IL"
              company="Bank"
              price="$1,600,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="Walgreens.jpg"
              location="Oswego, IL"
              company="Life Company"
              price="$3,800,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="OrlandPhoto.jpg"
              location="Orland Park, IL"
              company="Life Company"
              price="$2,200,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="Oneidaphoto.jpg"
              location="Denver, CO"
              company="Life Company"
              price="$19,500,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="MSUPhoto2014v2.jpg"
              location="Starkville, MS"
              company="Agency Lender"
              price="$19,000,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="kindercare.jpg"
              location="Oswego, IL"
              company="Life Company"
              price="$3,800,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="marketsquarephoto.jpg"
              location="Lake Forest, IL"
              company="CMBS"
              price="$29,000,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="waukphoto.jpg"
              location="Suburban Chicago, IL"
              company="CMBS"
              price="$20,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="corporate-headquarters.jpg"
              location="Elmhurst, IL"
              company="Life Company"
              price="$20,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="LUMCParkRidge.jpg"
              location="Park Ridge, IL"
              company="Life Company"
              price="$1,300,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="StaybridgeGlenviewPhoto.jpg"
              location="Glenview, IL"
              company="CMBS"
              price="$10,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="Oneidaphoto.jpg"
              location="Urbana, IL"
              company="Bank"
              price="$5,500,000"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default GridView
