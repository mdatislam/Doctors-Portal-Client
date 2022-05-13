import React from "react";
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import CommonButton from "../../SharedPage/Button/CommonButton";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen px-6 bg-auto bg-no-repeat bg-right-bottom  " style={{background:`url(${bg})`,
    backgroundSize:'cover'}}>
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={chair} class="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h3 class="text-3xl font-bold">Your New Smile Start Here!</h3>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="mt-3">
              <CommonButton>Get Started</CommonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
