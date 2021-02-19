import React, {useState, useLayoutEffect} from 'react';

import './GlitchText.css';

const GlitchText = props => {
    const [size, setSize] = useState ([0, 0]);
	let textAlign = 'left';
	let fontSize = '1em';

	const updateSize = () => {
	  setSize([window.innerWidth, window.innerHeight]);
	}

    useLayoutEffect (() => {
      window.addEventListener ('resize', updateSize);
	  updateSize ();	
      return () => window.removeEventListener ('resize', updateSize);
    }, []);    
	
	if(size[0] < 1400 || props.center ) {
		textAlign = 'center';
	}

	if(size[0] < 800) {
		fontSize = '.8em';
	}

  let GlitchText = (
    <p className="glitch" style={{letterSpacing: 0, textAlign: textAlign, fontSize: fontSize}} data-text={props.children}>
      {props.children}
    </p>
  );

  if (props.h2) {
    GlitchText = (
      <h2 className="glitch" data-text={props.children}>{props.children}</h2>
    );
  }

  return (
    <div id="app">
      <div id="wrapper">
        {GlitchText}
      </div>
    </div>
  );
};

export default GlitchText;
