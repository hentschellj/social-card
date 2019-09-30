import React from 'react';
import './SocialCard.scss';
import Front from './Front/Front';
import Back from './Back/Back';

function SocialCard() {
  return (
    <div className="SocialCard">
      <Front />

      <Back />
    </div>
  );
}

export default SocialCard;
