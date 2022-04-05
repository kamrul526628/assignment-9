import React from 'react';
import './Banner.css';
import watch from '../../images/banner.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-left'>
                <h1>Your Next Watch</h1>
                <p>Buy Piraso Analog Black Dial Men's Watch-32-BK-CK from Wrist Watches at Amazon.in. 30 days free exchange or return</p>
                <button>Live Damo</button>
            </div>
            <div>
            <img src={watch} alt="" />
            </div>
        </div>
    );
};

export default Banner;