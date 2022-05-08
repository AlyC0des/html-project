import React from "react";

const BannerForm = () => {
  return (
    <div className="banner">
      <div className="container_banner bs-bb">
        <div class="sec-row">
          <div class="sec-col padding ant-col-lg-12">
            <div class="banner_heading bs-bb">
              <h3 class="banner_title mb-30 color-white">
                Satisfied Users Over The Globe
              </h3>
            </div>
            <p class="banner_desc mb-30 color-white">
              If you’re looking for a rewarding career and the chance to make an
              impact, you’ve come to the right place. We will transform your
              business through our techniques!
            </p>
          </div>
          <div class="sec-col ant-col-lg-12">
            <div className="contact_panel bs-bb">
              <div class="d-flex flex-column">
                <div class="panel_heading padding">
                  <h4 class="panel_title mb-20 color-blue">Request A Quote</h4>
                  <p class="panel_desc color-grey mb-30">
                    Our deep pool of certified engineers and IT staff are ready
                    to help you to keep your IT business safe &amp; ensure high
                    availability.
                  </p>
                </div>
                <div class="sec-row justify-between">
                  <div class="sec-col mb-30 padding">
                    <input
                      class="input-box bs-bb ol-none"
                      id="contactName"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div class="sec-col mb-30 padding ant-col-sm-12">
                    <input
                      class="input-box bs-bb ol-none"
                      id="Email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div class="sec-col mb-30 padding ant-col-sm-12">
                    <input
                      class="input-box bs-bb ol-none"
                      id="Inquiry"
                      type="text"
                      placeholder="Inquiry"
                    />
                  </div>
                  <div class="sec-col mb-30 padding ant-col-sm-12">
                    <input
                      class="input-box bs-bb ol-none"
                      id="Phone"
                      type="text"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="panel_detail_box mb-30 padding">
                  <textarea
                    placeholder="Additional Details!"
                    id="contact-message"
                    class="panel-detail bs-bb w-100 ol-none"
                  ></textarea>
                </div>
                <div class="ant-row align-center mb-20 padding">
                  <input class="check-box" id="check_box" type="checkbox" />
                  <label class="p-5 color-grey">
                    I accept the privacy and terms.
                  </label>
                </div>
                <button class="form_btn ps-relative index-1 color-white bg-green bs-bb ol-none">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
