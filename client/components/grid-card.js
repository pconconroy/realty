import React, {Component} from 'react'
import TransCard from './trans-card'

class GridCard extends Component {
  render() {
    return (
      <div>
        <div className="grid-item mobile-apps mb-30">
          <TransCard
            image={this.props.image}
            loaction={this.props.location}
            company={this.props.company}
            price={this.props.price}
          />
        </div>
      </div>
    )
  }
}

export default GridCard
