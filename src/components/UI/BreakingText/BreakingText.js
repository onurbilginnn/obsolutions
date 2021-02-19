import React from 'react';

import './BreakingText.css';

const BreakingText = props => {
    return <div className="breakingText-container">
        <h1 data-text={props.children}><span>{props.children}</span></h1>
    </div>
};

export default BreakingText;