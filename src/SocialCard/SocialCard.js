import React from 'react';
import './SocialCard.scss';
import Front from './Front/Front';
import Back from './Back/Back';

function SocialCard() {
  return (
    <div className="container">
      <div className="SocialCard">
        <div className="sides">
          <Front />

          <Back />
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
