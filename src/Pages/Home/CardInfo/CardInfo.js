import React from 'react';

const CardInfo = ({img,cardTitle,bgClass}) => {
    return (
    <div class={`card lg:card-side shadow-xl ${bgClass}`}>
  <figure><img src={img} className="px-5" alt="Album"/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
    );
};

export default CardInfo;