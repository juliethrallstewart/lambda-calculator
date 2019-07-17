import React from 'react';

const OperatorButton = ({ operator, operatorsArr, setOperatorsArr }) => {
	return (
		<button onClick={() => setOperatorsArr(operator.char)}>
			{operator.char}
			{/* Display a button element rendering the data being passed down from the parent container on props */}
		</button>
	);
};

export default OperatorButton;
