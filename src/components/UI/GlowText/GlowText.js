import React from 'react';

import './GlowText.css';

const GlowText = props => {

    const mystyle = {
        color: props.color,
        margin: props.margin,
        textalign: props.textalign     
      };
     return <p {...props}
     className="glow"
     style={mystyle}
     >{props.children}</p>;
    
}

export default GlowText;