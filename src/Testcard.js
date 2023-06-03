import React from 'react';
import PropTypes from 'prop-types';

const Testcard = props => {
    return (
        <div style={{color:"white"}} className="boot-loader">
            <div className="bios-content">
                <br/>
                <p>Operating System not found</p>
            </div>
        </div>
    );
};

Testcard.propTypes = {
    
};

export default Testcard;