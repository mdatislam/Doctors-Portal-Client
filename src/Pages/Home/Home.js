import React from 'react';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Services from './Card/Services';
import Contact from './Contact';
import DoctorAppointMent from './DoctorAppointMent';
import Footer from './Footer';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Card></Card>
            <Services></Services>
            <DoctorAppointMent></DoctorAppointMent>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;