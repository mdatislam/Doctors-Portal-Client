import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg'



const Card = () => {
    return (
      <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
      <CardInfo cardTitle='Opening Hour' bgClass=' bg-gradient-to-r from-secondary to-primary' img={clock}></CardInfo>
      <CardInfo cardTitle='Visit our Location' bgClass="bg-accent" img={marker}></CardInfo>
      <CardInfo cardTitle='Contact to US' bgClass=' bg-gradient-to-r from-secondary to-primary' img={phone}></CardInfo>
      </div>
    );
};

export default Card;