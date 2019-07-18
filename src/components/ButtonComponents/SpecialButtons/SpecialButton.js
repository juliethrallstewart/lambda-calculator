import React, { useState } from 'react';

const SpecialButton = ({ special }) => {
	return (
        <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}

		<button className="button special" onClick={() => console.log('special button clicked')}>
			{special}
		</button>
        </>
	);
};

export default SpecialButton;
