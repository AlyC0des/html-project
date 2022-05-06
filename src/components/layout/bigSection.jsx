import React from "react";
import img from '../../images/man.jpg'

const BigSection = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="padding mb-20 d-flex align-center">
          <div className="heading_line"></div>
          <h2 className="section_heading color-green ff-roboto">Timely Service Delivery & Incidect Resolutions!!</h2>
        </div>
        <div className="sec-row">
          <div className="sec-col padding">
            <h3 className="title color-blue mb-40">
              Manage Service Delivery across various Business like,HR,Legal
              and other IT departments!!
            </h3>
          </div>
          <div className="sec-col padding">
            <div>
              <p className="desc">
                Smartdata has been helping businesses throughout the world to
                manage their IT through our unique approach to technology
                management and consultancy solutions.Provide user with
                approprite view and access permissions and to
                requests,problems,changes,contacts,assets,solutions and reports
                with our experienced professionals
              </p>
              <p className="desc">
                As one of the world's largest IT Service Provider our deep pool
                of certified engineers and IT staff are ready to help you to
                keep your IT business safe and ensure high availibility
              </p>
            </div>
          </div>
        </div>
        <div className="sec-row">
          <div className="sec-col padding">
              <div className="ps-relative">
                <img className="sec-img"src={img} alt="man working in office" />
              </div>
            </div>
         <div className="sec-col padding">
           <ul className="sec_ul padding">
             <li><i class="check_circle"><span role="img" aria-label="check" class="anticon anticon-check"><svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span></i>Eliminate Repeat Entry</li>
             <li><i class="check_circle"><span role="img" aria-label="check" class="anticon anticon-check"><svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span></i>Drive Business Process</li>
             <li><i class="check_circle"><span role="img" aria-label="check" class="anticon anticon-check"><svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span></i>Structure Data & Docs</li>
             <li><i class="check_circle"><span role="img" aria-label="check" class="anticon anticon-check"><svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span></i>Simplify Communication</li>
             <li><i class="check_circle"><span role="img" aria-label="check" class="anticon anticon-check"><svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span></i>Speed up Transactions</li>
             <li><i class="check_circle"><span role="img" aria-label="check" class="anticon anticon-check"><svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></span></i>Automate Workflows</li>
           </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BigSection;
