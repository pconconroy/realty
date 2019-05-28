import React, {Component} from 'react'

class TransCard extends Component {
  render() {
    console.log('yo we here', this.props)
    return (
      <div>
        <div className="col-sm-6 mb-4" id="no-margin-card">
          <div className="blog-card border">
            <a className="post-thumb" href="#">
              <img src={`/assets/${this.props.image}`} alt="Post Thumbnail" />
            </a>
            <div className="card-body">
              <h5 className="post-title">
                <a href="#">
                  {this.props.location} <br /> {this.props.company}
                </a>
              </h5>
              <a className="tag-link" href="#">
                {this.props.price}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TransCard
