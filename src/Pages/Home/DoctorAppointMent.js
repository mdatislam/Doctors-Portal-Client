import React from 'react';
import doctor from '../../assets/images/doctor.png'
import background from '../../assets/images/appointment.png'
import CommonButton from '../SharedPage/Button/CommonButton';

const DoctorAppointMent = () => {
    return (
       <section className='' style={{background:`url(${background})`}}>
            <div className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block mt-[-140px]'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 p-20 lg:p-2 '>
                <h3 className='text-primary'>Appointment</h3>
                <h2 className='text-white text-2xl'>Make an AppointMent Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptatem natus suscipit, nulla, amet in facere quae doloremque cum minus sapiente unde laudantium vitae quis voluptatibus tempore architecto ullam blanditiis.</p>
               <div className='mt-3'>
               <CommonButton>Get Appointment</CommonButton>
               </div>
            </div>
        </div>
        
       </section>
    );
};

export default DoctorAppointMent;