import React from "react";

const Header = () => {
  return (
    <div className="header ps-relative index-1">
      <div className="container padding">
        <div className="header_content">
          <h2 className="header_title">
            We Run All Kinds Of IT Services That Vow Your Success
          </h2>
          <p className="header_desc">
            We are experienced professional who understand that IT service is
            changing and are true partners who care about your success. Our
            team provides a consultative approach on emerging technology.
          </p>
          <div className="flex-wrap d-flex">
            <a class="btn color-white ps-relative index-1 mr-30 mb-10 bg-green d-flex align-center justify-center" href="button">
              More About Us
              <i className="icon-arrow-right ml-10 d-flex align-center justify-center">
                <span className="anticon">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="arrow-right"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                  </svg>
                </span>
              </i>
            </a>
            <a className="btn bg-white d-flex align-center justify-center color-black ps-relative index-1">Our Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
