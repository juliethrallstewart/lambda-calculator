import React, { useState } from 'react';
import { specials } from '../../../data.js';

const SpecialButton = ({ special }) => {
	return (
		<button>
			{special}
			{/* Display a button element rendering the data being passed down from the parent container on props */}
		</button>
	);
};

export default SpecialButton;
