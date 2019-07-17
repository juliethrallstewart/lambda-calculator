import React from 'react';

const NumberButton = ({ number, setNumbersArr }) => {
	return (
		<button onClick={() => setNumbersArr()}>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			{number}
		</button>
	);
};

export default NumberButton;
