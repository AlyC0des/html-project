import React from "react";
import logo from "../../images/logo-dark.png";
import logo2 from "../../images/logo-light.png"

const NavBar = () => {
  return (
    <nav className="nav d-flex">
      <div className="container h-100 padding d-flex justify-between align-center">
        <a className="nav_brand">
          <img src={logo2} />
          <img className="img-2" src={logo}/>
        </a>
        <div className="main_nav padding h-100 d-flex flex-end">
          <ul className="nav_ul d-flex align-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Company</a>
            </li>
            <li>
              <a href="/">IT Solutions</a>
            </li>
            <li>
              <a href>News&Media</a>
            </li>
            <li>
              <a href>Features</a>
            </li>
            <li>
              <a href>Contacts</a>
            </li>
          </ul>
          <ul className="nav_ul_2 d-flex align-center">
            <li>
              <a className="quote_btn d-flex align-center justify-center">Request A Quote</a>
            </li>
            <li>
              <button className="login_btn">
                <i className="user_icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </i>
                <span>Login</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;