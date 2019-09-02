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
              image="DenverPhoto.jpg"
              location="Industrial Building"
              company="Life Company"
              price="$2,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="ElginPhoto.png"
              location="Neighborhood Retail Center"
              company="Bank"
              price="$1,600,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="Walgreens.jpg"
              location="Walgreens Drugs"
              company="Life Company"
              price="$3,800,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="OrlandPhoto.jpg"
              location="Medical Office Building"
              company="Life Company"
              price="$2,200,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="Oneidaphoto.jpg"
              location="Cold Storage Distribution"
              company="Life Company"
              price="$19,500,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="MSUPhoto2014v2.jpg"
              location="Dedicated Student Housing"
              company="Agency Lender"
              price="$19,000,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="kindercare.jpg"
              location="Specialty Retail"
              company="Life Company"
              price="$3,800,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="marketsquarephoto.jpg"
              location="Upscale Specialty Retail"
              company="CMBS"
              price="$29,000,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="waukphoto.jpg"
              location="Medical Office Buildings"
              company="CMBS"
              price="$20,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="newprop6.jpg"
              location="Corporate Headquarters"
              company="Life Company"
              price="$20,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="LUMCprop.jpg"
              location="Condo Medical Office Building"
              company="Life Company"
              price="$1,300,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="StaybridgeGlenviewPhoto.jpg"
              location="Staybridge Suites Hotel"
              company="CMBS"
              price="$10,000,000+"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="UofIphotov2.jpg"
              location="Dedicated Student Housing"
              company="Bank and Agency"
              price="$5,500,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="newprop1.jpg"
              location="Dedicated Student Housing"
              company="Bank and Agency"
              price="$10,500,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            {' '}
            <TransCard
              image="newprop2.jpg"
              location="Freezer Distribution Building"
              company="Combo Construction Perm"
              price="$18,000,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="newprop3.jpg"
              location="Dedicated Student Housing"
              company="Bank and Agency"
              price="$7,300,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            {' '}
            <TransCard
              image="pointe5oaks.jpg"
              location="Market Apartments"
              company="Bank and Agency"
              price="$16,500,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="flexindus.jpg"
              location="Flex Industrial"
              company="Bank"
              price="$1,350,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="aldi.JPG"
              location="Aldi"
              company="Insurance Co"
              price="$1,960,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="retailstrip62.jpg"
              location="Retail Strip"
              company="Bank"
              price="$3,000,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="retail.jpg"
              location="Retail"
              company="Insurance Co"
              price="$1,250,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="walmart.jpg"
              location="Walmart Neighborhood Market"
              company="Term Loan"
              price="$6,800,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="lincolnparkapt.jpg"
              location="Lincoln Park Apartments"
              company="Bank"
              price="$2,350,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="industrial.jpg"
              location="Industrial"
              company="Bank"
              price="$3,500,000"
            />
          </div>
          <div className="grid-item mobile-apps mb-30">
            <TransCard
              image="appartmentpor.jpg"
              location="Apartment Portfolio"
              company="Agency Lender"
              price="$7,200,000"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default GridView
