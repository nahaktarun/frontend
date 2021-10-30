import React from "react";

function Navbar() {
  return (
    <div>
      <section className="as_header_wrapper">
        <div className="as_logo">
          <a href="javascript:;">
            <img src="assets/images/logo.svg" alt=""></img>
          </a>
        </div>
        <div className="as_header_detail">
          <div className="as_info_detail">
            <ul>
              <li>
                <a href="javascript:;">
                  <div className="as_infobox">
                    <span className="as_infoicon">
                      <img src="assets/images/svg/headphone.svg" alt=""></img>
                    </span>
                    <span className="as_orange">Talk to our Astrogers -</span>
                    +1800 326 3264
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div className="as_infobox">
                    <span className="as_infoicon">
                      <img src="assets/images/svg/mail1.svg" alt=""></img>
                    </span>
                    <span className="as_orange">Talk to our Astrogers -</span>
                    support@website.com
                  </div>
                </a>
              </li>
            </ul>
            <div className="as_right_info">
              <a href="javascript:;">
                <div
                  className="as_infobox"
                  data-bs-toggle="modal"
                  data-bs-target="#as_login"
                >
                  <span className="as_infoicon">
                    <img src="assets/images/svg/login.svg" alt=""></img>
                  </span>
                  <span className="as_logintext">Log in / Register</span>
                </div>
              </a>
              <div className="as_cart">
                <div className="as_cart_wrapper">
                  <span>
                    <img src="assets/images/svg/cart.svg" alt=""></img>
                    <span className="as_cartnumber">02</span>
                  </span>
                  $512
                </div>

                <div className="as_cart_box">
                  <div className="as_cart_list">
                    <ul>
                      <li>
                        <div className="as_cart_img">
                          <img
                            src="assets/images/prod1_d.jpg"
                            className="img-responsive"
                          ></img>
                        </div>
                        <div className="as_cart_info">
                          <a href="index.html#">Yellow Sapphire</a>
                          <p>1 X $20.00</p>
                          <a href="javascript:;" className="as_cart_remove">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="as_cart_img">
                          <img
                            src="http://kamleshyadav.com/html/astrology/version-2/assets/images/prod2_D.jpg"
                            className="img-responsive"
                          ></img>
                        </div>
                        <div className="as_cart_info">
                          <a href="index.html#">yantra</a>
                          <p>1 X $10.00</p>
                          <a href="javascript:;" className="as_cart_remove">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="as_cart_total">
                    <p>
                      total<span>$30.00</span>
                    </p>
                  </div>
                  <div className="as_cart_btn">
                    <button type="button" className="as_btn">
                      view cart
                    </button>
                    <button type="button" className="as_btn">
                      checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="as_menu_wrapper">
            <span className="as_toggle bg_overlay">
              <img src="assets/images/svg/menu.svg" alt=""></img>
            </span>
            <div className="as_menu">
              <ul>
                <li>
                  <a href="index.html" className="active">
                    home
                  </a>
                </li>
                <li>
                  <a href="about.html">about</a>
                </li>
                <li>
                  <a href="service.html">services</a>
                </li>
                <li>
                  <a href="javascript:;">blog</a>
                  <ul className="as_submenu">
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="javascript:;">blog single</a>
                      <ul className="as_submenu">
                        <li>
                          <a href="blog_left_detail.html">left sidebar</a>
                        </li>
                        <li>
                          <a href="blog_detail.html">right sidebar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="appointment.html">appointment</a>
                </li>
                <li>
                  <a href="javascript:;">shop</a>
                  <ul className="as_submenu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop_single.html">Shop Single</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">pages</a>
                  <ul className="as_submenu">
                    <li>
                      <a href="astrologer.html">Astrologer</a>
                    </li>
                    <li>
                      <a href="privacy_policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="error.html">404</a>
                    </li>
                    <li>
                      <a href="faq.html">faq</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </div>
            <div className="as_search_wrapper">
              <img
                src="assets/images/search.png"
                alt=""
                className="as_search"
              ></img>

              <div className="as_search_boxpopup">
                <a href="javascript:;" className="as_cancel"></a>
                <div className="as_search_inner">
                  <div className="as_search_widget">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Search..."
                    ></input>
                    <a href="index.html#">
                      <img src="assets/images/svg/search.svg" alt=""></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="as_body_overlay"></span>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
