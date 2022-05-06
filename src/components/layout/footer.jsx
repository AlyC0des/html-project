import React from "react";
import img from "../../images/logo-dark.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_primary bs-bb">
        <div className="container bs-bb">
          <div className="sec-row">
            <div className="sec-col sec-col-wide padding">
              <img className="footer_logo" src={img} alt="logo" />
            </div>
            <div class="sec-col padding ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-4">
              <h6 class="footer_widget_title color-blue">Company</h6>
              <div class="footer_widget_content">
                <ul class="li-style-none">
                  <li>
                    <a href="/" class="no-underline color-grey">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Meet Our Team
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      News &amp; Media
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sec-col padding ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-4">
              <h6 class="footer_widget_title color-blue">Solutions</h6>
              <div class="footer_widget_content">
                <ul class="li-style-none">
                  <li>
                    <a href="/" class="no-underline color-grey">
                      IT Management
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Cyber Security
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      IT Consulting{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Software Dev
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      IT Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sec-col padding ant-col-xs-24 ant-col-sm-12 ant-col-md-8 ant-col-lg-4">
              <h6 class="footer_widget_title color-blue">Resources</h6>
              <div class="footer_widget_content">
                <ul class="li-style-none">
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Pricing and plans
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Terms of Service{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Help &amp; FAQ{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline color-grey">
                      Site map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sec-col padding ant-col-xs-24 ant-col-sm-12 sec-col-wide">
              <h6 class="footer_widget_title color-blue">News Letter</h6>
              <div class="footer_form mb-20">
                <input
                  id="footer_email"
                  class="footer-email w-100 align-left ol-none bs-bb"
                  placeholder="Your Email Address"
                />
              </div>
              <div class="accept_privacy mb-20 d-flex align-center">
                <input class="check-box" id="check_box" type="checkbox" />
                <label class="p-5 color-grey">
                  I accept the privacy and terms.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="container bs-bb">
          <div
            class="sec-row align-center justify-center"
          >
            <div class="sec-col padding es-text-center ant-col-xs-24 ant-col-md-10">
              <span class="color-blue">
                © 2020 Smart Data, All Rights Reserved. With Love by
              </span>
              <a href="/" class="no-underline color-green">
                7oroof.com
              </a>
            </div>
            <div class="sec-col ant-col-xs-24 ant-col-md-4">
              <div class="sec-row justify-center">
                <button class="scrlup-btn ol-none d-flex justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="scroll_top_btn"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="sec-col padding ant-col-xs-24 ant-col-md-10">
              <div
                class="sec-row justify-center align-center"
              >
                <ul class="social_ul mr-30 li-style-none d-flex align-center bs-bb m-10">
                  <li>
                    <a href="/" class="no-underline">
                      <i class="social_tag color-blue trans-3s">
                        <span
                          role="img"
                          aria-label="facebook"
                          class="anticon anticon-facebook"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="facebook"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
                          </svg>
                        </span>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="/" class="no-underline">
                      <i class="social_tag color-blue trans-3s">
                        <span
                          role="img"
                          aria-label="instagram"
                          class="anticon anticon-instagram"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="instagram"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                          </svg>
                        </span>
                      </i>
                    </a>
                  </li>
                  <li class="mr-0">
                    {" "}
                    <a href="/" class="no-underline">
                      <i class="social_tag color-blue trans-3s">
                        <span
                          role="img"
                          aria-label="twitter"
                          class="anticon anticon-twitter"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="twitter"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                          </svg>
                        </span>
                      </i>
                    </a>
                  </li>
                </ul>
                <div class="sec-row align-center">
                  <a
                    class="social_btn btn ps-relative index-1 no-underline color-blue d-flex justify-center align-center bs-bb m-10"
                    href="/"
                  >
                    <i class="icon-apple"></i>
                    <span>Apple Store</span>
                  </a>
                  <a
                    class="social_btn btn ps-relative index-1 no-underline color-blue d-flex justify-center align-center bs-bb m-10"
                    href="/"
                  >
                    <i class="icon-play-store"></i>
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
