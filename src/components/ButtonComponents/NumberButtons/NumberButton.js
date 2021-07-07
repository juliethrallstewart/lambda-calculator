import React from 'react';

const NumberButton = ({ number, buttonClass }) => {
	return (
	  <>
		{/* Display a button element rendering the data being passed down from the parent container on props */}
		{buttonClass === "zero" ? (
		  <button className="button zero" onClick={() => console.log('number button clicked')}>{number}</button>
		) : (
		  <button className="button number" onClick={() => console.log('number button clicked')}>{number}</button>
		)}
	  </>
	);
  };
  
	export default NumberButton;
	
