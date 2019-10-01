import React from 'react';
import './Front.scss';
import jack from '../../assets/jack.png';

class Front extends React.Component {
    render() {
        return (
            <div className="front-side">
                <div className="container front">
                    <div className="row front">
                        <div className="col-xs-6">
                            <img src={jack} />
                        </div>

                        <div className="col-xs-6 content">
                            <h2>Front-End Developer</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Front;