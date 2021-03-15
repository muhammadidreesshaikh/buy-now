import React from 'react';
import '../assets/css/adds.css';

import image2 from '../assets/img/adds4.gif'
import image1 from '../assets/img/adds1.gif'

function Adds() {

    return (
        <div>
            <div className="adds">
                <div className="container">

                    <div className="image">
                        <img src={image2} />
                    </div>

                    <div className="follow">
                        <h3>Follow BuyNow.</h3>

                        <div className="icon">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>

                    <div className="image1">
                        <img src={image1} />
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Adds;