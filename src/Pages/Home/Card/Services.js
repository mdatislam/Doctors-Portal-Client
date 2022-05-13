import React from 'react';
import fluid from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import SingleService from '../SingleService';
import CommonButton from '../../SharedPage/Button/CommonButton';

const Services = () => {
    const services=[
        { _id:1,name:'FluideTreatment', description:'lorem12',img:fluid},
        { _id:2,name:'CavitySensivity', description:'lorem12',img:cavity},
        { _id:3,name:'Treatment', description:'lorem12',img:teeth},
    ]
    return (
        <div className='py-14'>
            <h2 className=' text-center font-bold font text-2xl pb-12' >Services <span className='text-primary'>We Provide</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {

                    services.map(service=> <SingleService
                    key={service._id}
                    service={service}
                    ></SingleService>)
                }
            </div>
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row ">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl ml-20"  />
    <div className='flex-1'>
      <h1 class="text-3xl font-bold">Exceptional Dental Care,On your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='mt-3'>
          <CommonButton>Get Treatment</CommonButton>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Services;