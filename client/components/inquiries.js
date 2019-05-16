import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {sendFunc} from '../store/email'

class Inquiries extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  handleChange = evt => {
    console.log('changes', this.state)
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = evt => {
    this.props.sendInquiry(this.state)
  }
  render() {
    return (
      <div className="inquiries">
        <section className="container mb-5 pb-3">
          <div className="wizard">
            <div className="wizard-body pt-3">
              <h2 className="h4 text-center">Inquiries</h2>
              <p className="text-muted text-center">
                We will get back to you as soon as possible
              </p>
              <form
                className="needs-validation"
                noValidate
                onSubmit={this.handleSubmit}
              >
                <div className="row pt-3">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="contact-name">
                        Your Name{' '}
                        <span className="text-danger font-weight-medium">
                          *
                        </span>
                      </label>
                      <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        id="contact-name"
                        placeholder="John Doe"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your name!
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="contact-email">
                        Your Email{' '}
                        <span className="text-danger font-weight-medium">
                          *
                        </span>
                      </label>
                      <input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="form-control"
                        type="email"
                        id="contact-email"
                        placeholder="johndoe@email.com"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid email address!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject</label>
                      <input
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        id="contact-subject"
                        placeholder="Provide short title of you request"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">
                    Message{' '}
                    <span className="text-danger font-weight-medium">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    className="form-control"
                    rows={7}
                    id="contact-message"
                    placeholder="Let us know more what's on your mind..."
                    required
                    defaultValue={''}
                  />
                  <div className="invalid-feedback">
                    Please write a message!
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    sendInquiry: emailInfo => dispatch(sendFunc(emailInfo))
  }
}
export default connect(null, mapDispatch)(Inquiries)
