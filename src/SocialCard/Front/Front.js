import React from 'react';
import './Front.scss';
import jack from '../../assets/jack.png';

class Front extends React.Component {
    render() {
        return (
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Front;