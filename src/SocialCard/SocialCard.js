import React, {useState} from 'react';
import './SocialCard.scss';
import ReactCardFlip from 'react-card-flip';
import jack from '../assets/jack.png';

const SocialCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
      <div className="container">
        <div className="SocialCard">
          <div className="sides">
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
              <div className="front-side">
                <div className="container front">
                  <div className="row front">
                    <div className="col-xs-6 image">
                      <img src={jack} />
                    </div>

                    <div className="col-xs-6 content">
                      <h2>Jack Hentschell</h2>
                      <h5>Front-End Web Developer</h5>
                      <hr />
                      <h3>314-359-9008</h3>
                      <h3><a href="mailto:hentschellj@gmail.com">hentschellj@gmail.com</a></h3>
                      <button class="flip-btn" onClick={handleClick}>Click to Flip Card</button>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="back-side" onClick={handleClick}>
                <div className="container back">
                  <div className="row back">
                    <div className="col-xs-12">
                      <h2>Life is one big improvisation.</h2>
                      <button class="flip-btn" onClick={handleClick}>Click to Flip Card</button>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
  );
}

export default SocialCard;
