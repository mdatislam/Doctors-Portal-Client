import React from "react";
import appointment from "../../assets/images/appointment.png";
import CommonButton from "../SharedPage/Button/CommonButton";

const Contact = () => {
  return (
    <section className="mt-24 py-12" style={{background: `url(${appointment})`}}>
      <div className="text-center ">
        <h4 className="text-primary">Contact Us</h4>
        <h2 className="text-2xl text-white">Stay Connected With US</h2>
      </div>

      <form className="grid gid-cols-1 gap-4 justify-items-center mt-5">
      <input type="email" placeholder="Enter email address" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs" />
      <textarea type="text" placeholder="Message" class="input input-bordered w-full max-w-xs" />
      <CommonButton>Submit</CommonButton>
      </form>

      
    </section>
  );
};

export default Contact;
