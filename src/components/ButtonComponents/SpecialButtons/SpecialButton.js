import React, { useState } from 'react';

const SpecialButton = ({ special, setSpecialsArr }) => {
	return (
		<button onClick={() => setSpecialsArr(special)}>
			{special}
			{/* Display a button element rendering the data being passed down from the parent container on props */}
		</button>
	);
};

export default SpecialButton;
