import React, {Component} from 'react'

class MobileMenu extends Component {
  render() {
    return (
      <div>
        <div
          className="offcanvas-container is-triggered offcanvas-container-reverse"
          id="mobile-menu"
        >
          <span className="offcanvas-close">
            <i className="fe-icon-x" />
          </span>
          <div className="px-4 pb-4">
            <h6>Menu</h6>
            <div className="d-flex justify-content-between pt-2">
              <div className="btn-group w-100 mr-2">
                <a
                  className="btn btn-secondary btn-sm btn-block dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  <img src="img/flags/en.png" alt="English" />English
                </a>
                <div className="dropdown-menu" style={{minWidth: '150px'}}>
                  <a className="dropdown-item" href="#">
                    <img src="img/flags/fr.png" alt="Français" />Français
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="img/flags/de.png" alt="Deutsch" />Deutsch
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="img/flags/it.png" alt="Italiano" />Italiano
                  </a>
                </div>
              </div>
              <a
                className="btn btn-primary btn-sm btn-block"
                href="account-login.html"
              >
                <i className="fe-icon-user" />&nbsp;Login
              </a>
            </div>
          </div>
          <div
            className="offcanvas-scrollable-area border-top"
            style={{height: 'calc(100% - 235px)', top: '144px'}}
          >
            {/* Mobile Menu*/}
            <div className="accordion mobile-menu" id="accordion-menu">
              {/* Home*/}
              <div className="card">
                <div className="card-header">
                  <a className="mobile-menu-link" href="index.html">
                    Home
                  </a>
                  <a
                    className="collapsed"
                    href="#home-submenu"
                    data-toggle="collapse"
                  />
                </div>
                <div
                  className="collapse"
                  id="home-submenu"
                  data-parent="#accordion-menu"
                >
                  <div className="card-body">
                    <ul>
                      <li className="dropdown-header">
                        <i className="fe-icon-briefcase" />&nbsp;&nbsp; <br />
                        Portfvyuvuyolio
                      </li>

                      <li className="dropdown-header">
                        <i className="fe-icon-shopping-bag" />&nbsp;&nbsp;E-Commerce
                      </li>
                      <li className="dropdown-item">
                        <a href="home-shop-v1.html">Online Shop v.1</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="home-shop-v2.html">Online Shop v.2</a>
                      </li>
                      <li className="dropdown-header">
                        <i className="fe-icon-edit" />&nbsp;&nbsp;Blog
                      </li>
                      <li className="dropdown-item">
                        <a href="home-corporate-blog.html">Corporate Blog</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="home-personal-blog.html">Personal Blog</a>
                      </li>
                      <li className="dropdown-header">
                        <i className="fe-icon-home" />&nbsp;&nbsp;Landing Pages
                      </li>
                      <li className="dropdown-item">
                        <a href="home-mobile-app-showcase.html">
                          Mobile App Showcase
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="home-web-app-showcase.html">
                          Web App Showcase (SAAS)
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="disabled-link" href="#">
                          Product Promo Page<span className="badge badge-secondary">
                            Soon
                          </span>
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="home-conference-landing.html">
                          Conference Landing
                        </a>
                      </li>
                      <li className="dropdown-header">
                        <i className="fe-icon-dollar-sign" />&nbsp;&nbsp;Business
                      </li>
                      <li className="dropdown-item">
                        <a className="disabled-link" href="#">
                          Corporate Website<span className="badge badge-secondary">
                            Soon
                          </span>
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="home-marketing-seo.html">
                          Digital Marketing &amp; SEO
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="home-capital-investments.html">
                          Venture Capital Investments
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="disabled-link" href="#">
                          Startup Homepage<span className="badge badge-secondary">
                            Soon
                          </span>
                        </a>
                      </li>
                      <li className="dropdown-header">
                        <i className="fe-icon-menu" />&nbsp;&nbsp;Directory
                        &amp; Listings
                      </li>
                      <li className="dropdown-item">
                        <a className="disabled-link" href="#">
                          Real Estate Listing<span className="badge badge-secondary">
                            Soon
                          </span>
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="disabled-link" href="#">
                          Jobs Board<span className="badge badge-secondary">
                            Soon
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Portfolio*/}
              <div className="card">
                <div className="card-header">
                  <a
                    className="mobile-menu-link"
                    href="portfolio-style1-boxed.html"
                  >
                    Portfrweqrqwrqerqwrolio
                  </a>
                  <a
                    className="collapsed"
                    href="#portfolio-submenu"
                    data-toggle="collapse"
                  />
                </div>
                <div
                  className="collapse"
                  id="portfolio-submenu"
                  data-parent="#accordion-menu"
                >
                  <div className="card-body">
                    <ul>
                      <li className="dropdown-item">
                        <a href="portfolio-style1-boxed.html">Style 1 Grid</a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item">
                            <a href="portfolio-style1-boxed.html">
                              Style 1 Boxed Layout
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="portfolio-style1-fw.html">
                              Style 1 Full Width Layout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a href="portfolio-style2-boxed.html">Style 2 Grid</a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item">
                            <a href="portfolio-style2-boxed.html">
                              Style 2 Boxed Layout
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="portfolio-style2-fw.html">
                              Style 2 Full Width Layout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a href="portfolio-single-side-gallery-grid.html">
                          Single Project
                        </a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item">
                            <a href="portfolio-single-side-gallery-grid.html">
                              Side Gallery Grid
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="portfolio-single-side-gallery-list.html">
                              Side Gallery List
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="portfolio-single-wide-slider.html">
                              Wide Slider
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="portfolio-single-wide-gallery.html">
                              Wide Gallery
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Blog*/}
              <div className="card">
                <div className="card-header">
                  <a className="mobile-menu-link" href="blog-grid-rs.html">
                    Blog
                  </a>
                  <a
                    className="collapsed"
                    href="#blog-submenu"
                    data-toggle="collapse"
                  />
                </div>
                <div
                  className="collapse"
                  id="blog-submenu"
                  data-parent="#accordion-menu"
                >
                  <div className="card-body">
                    <ul>
                      <li className="dropdown-header">Blog Layouts</li>
                      <li className="dropdown-item">
                        <a href="blog-grid-rs.html">Grid Right Sidebar</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="blog-grid-ls.html">Grid Left Sidebar</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="blog-grid-ns.html">Grid No Sidebar</a>
                      </li>
                      <li className="dropdown-header">Single Post Formats</li>
                      <li className="dropdown-item">
                        <a href="blog-single-gallery.html">Post Gallery</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="blog-single-carousel.html">
                          Post Image Carousel
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="blog-single-video.html">Post Video</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="blog-single-audio.html">Post Audio</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="blog-single-quotation.html">Post Quotation</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="blog-single-link.html">Post Link</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Shop*/}
              <div className="card">
                <div className="card-header">
                  <a className="mobile-menu-link" href="shop-boxed-ls.html">
                    Shop
                  </a>
                  <a
                    className="collapsed"
                    href="#shop-submenu"
                    data-toggle="collapse"
                  />
                </div>
                <div
                  className="collapse"
                  id="shop-submenu"
                  data-parent="#accordion-menu"
                >
                  <div className="card-body">
                    <ul>
                      <li className="dropdown-header">Shop Layouts</li>
                      <li className="dropdown-item">
                        <a href="shop-boxed-ls.html">Boxed Left Sidebar</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-boxed-rs.html">Boxed Right Sidebar</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-boxed-ft.html">Boxed Filters Top</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-boxed-ns.html">Boxed No Sidebar</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-fw-ls.html">Full Width Left Sidebar</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-fw-rs.html">Full Width Right Sidebar</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-fw-ft.html">Full Width Filters Top</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-fw-ns.html">Full Width No Sidebar</a>
                      </li>
                      <li className="dropdown-header">Shop Pages</li>
                      <li className="dropdown-item">
                        <a href="shop-categories.html">Shop Categories</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="shop-single.html">Product Page</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="cart.html">Cart</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="checkout-address.html">Checkout - Address</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="checkout-shipping.html">Checkout - Shipping</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="checkout-payment.html">Checkout - Payment</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="checkout-review.html">Checkout - Review</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="checkout-complete.html">Checkout - Complete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Account*/}
              <div className="card">
                <div className="card-header">
                  <a className="mobile-menu-link" href="account-orders.html">
                    Account
                  </a>
                  <a
                    className="collapsed"
                    href="#account-submenu"
                    data-toggle="collapse"
                  />
                </div>
                <div
                  className="collapse"
                  id="account-submenu"
                  data-parent="#accordion-menu"
                >
                  <div className="card-body">
                    <ul>
                      <li className="dropdown-item">
                        <a href="account-login.html">Login / Register</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="account-password-recovery.html">
                          Password Recovery
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="account-orders.html">Orders List</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="account-profile.html">Profile Settings</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="account-address.html">
                          Contact / Shipping Address
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="account-wishlist.html">Wishlist</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="account-tickets.html">My Tickets</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="account-single-ticket.html">Single Ticket</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Pages*/}
              <div className="card">
                <div className="card-header">
                  <a className="mobile-menu-link active" href="#">
                    Pages
                  </a>
                  <a
                    className="collapsed"
                    href="#pages-submenu"
                    data-toggle="collapse"
                  />
                </div>
                <div
                  className="collapse"
                  id="pages-submenu"
                  data-parent="#accordion-menu"
                >
                  <div className="card-body">
                    <ul>
                      <li className="dropdown-item active">
                        <a href="about-us-v1.html">About Us</a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item active">
                            <a href="about-us-v1.html">About Us v.1</a>
                          </li>
                          <li className="dropdown-item">
                            <a href="about-us-v2.html">About Us v.2</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a href="contacts-v1.html">Contacts</a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item">
                            <a href="contacts-v1.html">Contacts v.1</a>
                          </li>
                          <li className="dropdown-item">
                            <a href="contacts-v2.html">Contacts v.2</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a href="help-topics.html">Help Center</a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item">
                            <a href="help-topics.html">Help Topics</a>
                          </li>
                          <li className="dropdown-item">
                            <a href="help-single-topic.html">Single Topic</a>
                          </li>
                          <li className="dropdown-item">
                            <a href="help-submit-request.html">
                              Submit a Request
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a href="services.html">Services</a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item">
                            <a href="services.html">Services Landing</a>
                          </li>
                          <li className="dropdown-item">
                            <a href="services-single.html">
                              Single Service Page
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="product-comparison.html">Product Comparison</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="order-tracking.html">Order Tracking</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="search-results.html">Search Results</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="coming-soon-light.html">Coming Soon</a>
                        <ul className="mobile-sublevel">
                          <li className="dropdown-item">
                            <a href="coming-soon-light.html">
                              Coming Soon Light
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a href="coming-soon-dark.html">Coming Soon Dark</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a href="404.html">404 Not Found</a>
                      </li>
                      <li className="dropdown-item">
                        <a className="text-accent" href="docs/dev-setup.html">
                          <i className="d-inline-block fe-icon-file-text align-middle mr-1" />Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Components*/}
              <div className="card">
                <div className="card-header">
                  <a className="mobile-menu-link" href="components.html">
                    Components
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer px-4 pt-3 pb-2 text-center">
            <a className="social-btn sb-style-3 sb-twitter" href="#">
              <i className="socicon-twitter" />
            </a>
            <a className="social-btn sb-style-3 sb-facebook" href="#">
              <i className="socicon-facebook" />
            </a>
            <a className="social-btn sb-style-3 sb-pinterest" href="#">
              <i className="socicon-pinterest" />
            </a>
            <a className="social-btn sb-style-3 sb-instagram" href="#">
              <i className="socicon-instagram" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileMenu
