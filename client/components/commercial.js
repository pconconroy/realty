import React, {Component} from 'react'

class Commercial extends Component {
  render() {
    return (
      <div>
        <section className="bg-parallax">
          <div
            className="bg-parallax-img"
            data-parallax="{&quot;y&quot; : 100}"
          >
            <img src="img/pages/service-hero-bg.png" alt="Service" />
          </div>
          <div className="container bg-parallax-content pt-5 pb-5">
            <h1 className="h2 block-title text-center">Commercial</h1>
            <div className="row justify-content-center pt-2">
              <div className="col-xl-8 col-lg-9 col-md-10">
                <p className="opacity-80 text-center">
                  Through our correspondent and other lending relationships,
                  Prairie Realty Advisors, Inc. can provide acquisition,
                  construction, permanent, and bridge financing on a wide range
                  of loans and services on most types of income producing
                  properties such as:{' '}
                  <strong>
                    Office Buildings, Shopping Centers, Retail Properties,
                    Industrial Buildings, Multi-Family Properties, Single Tenant
                    Properties, Medical Office Buildings, Credit Leased
                    Facilities, Health Care Facilities, Business Parks, Mobile
                    Home Parks, Land Sale Leasebacks, Institutional Sales, IRB
                    and Tax Exempt Financing, Mezzanine/Bridge Loans, Specialty
                    Properties, Third-Party and Institutional Equity, Seed &
                    Venture RE CapX, Senior Living (Independent and Assisted),
                    Historic Tax Credit Financing, Student Housing, Discounted
                    Note Funding, Development Advisory
                  </strong>
                </p>
                <p className="opacity-80 text-center">
                  Furthermore, the typical loan terms with which we excel are
                  listed below. Please keep in mind that property values
                  fluctuate with the market. Call us if you would like to know
                  more exact estimates to facilitate a loan proposal.
                </p>
                <p className="opacity-80 text-center">
                  Loan Amount: $2 Million and up <br /> Loan Fees: 1% of loan
                  amount
                </p>
                <p className="opacity-80 text-center">
                  Interest Rates: Typically fixed at 60-350 basis points over
                  the corresponding US Treasury Bond Rates or floating over
                  Libor
                </p>
                <p className="opacity-80 text-center">
                  Term: 3-25 years <br />Amortization: 10 – 30 years <br /> Debt
                  Coverage: 1.10 to 1.30 <br />Max Loan-to-Value: Apartments Up
                  to 85% <br />Office Up to 80% <br />Industrial Up to 80%{' '}
                  <br />Retail Up to 80% <br />Credit Leases Up to 100%
                </p>
                <p className="opacity-80 text-center">
                  In order to provide a quick response to your financing needs,
                  the following is a list of items which will enable us to
                  evaluate the property
                </p>
                <p className="opacity-80 text-center">
                  Current Rent Roll <br /> Borrower Information <br />Brief
                  Description of the Property <br />Operating History - last 3
                  years <br />Year-to-Date Income and Expense <br />Property
                  Photos <br />Aerial (if available) <br />Any and all
                  professional reports including Appraisal, Phase 1
                  Environmental Assessment and Title Reports
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Commercial
