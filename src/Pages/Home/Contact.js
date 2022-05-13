import React from "react";
import bgAappointMent from "../../assets/images/appointment.png";
import CommonButton from "../SharedPage/Button/CommonButton";

const Contact = () => {
  return (
    <section className="mt-24 py-12" style={{ background: `url(${bgAappointMent})` }}>
      <div className="text-center ">
        <h4 className="text-primary">Contact Us</h4>
        <h2 className="text-2xl text-white">Stay Connected With US</h2>
      </div>

      <form className=" text-center ">
          <div className=" mt-5 max-w-sm lg:w-96 mx-auto">
          <div class="form-control">
          <label class="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              class="input input-bordered"
            />
          </label>
          <label class="input-group mt-2">
            <span>Subject</span>
            <input
              type="text"
              placeholder="subject"
              class="input input-bordered"
            />
          </label>

          <label class="input-group mt-2">
            <span>Message</span>
            <textarea
              type="text"
              placeholder=" Type your Message"
              class="input input-bordered"
            />
          </label>
        </div>
        <div className="mt-3">
        <CommonButton>Submit</CommonButton>
        </div>
          </div>
        
      </form>
    </section>
  );
};

export default Contact;
